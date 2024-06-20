import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { generateYupSchema } from "@/utils/yupSchemaValidator";
import { Container, FormContainer, FlexHeader, Heading } from "../styles";
import { controlMapping } from "../controls";
import { useForm } from "@/forms";
import { yupResolver } from "@hookform/resolvers/yup";

const MultiStepForm = ({
  controls: formControls,
  setFormData,
  formData,
  activeStep,
  setActiveStep,
  setCompleted,
}) => {
  const { label = "", controls = [] } = formControls[activeStep] || {};
  const schema = generateYupSchema(controls);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  console.log("errors", errors, schema, controls);

  const onSubmit = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
    if (formControls.length - 1 !== activeStep) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    // setCompleted((prev) => prev - 1);
  };

  const setValues = () => {
    controls.forEach((val) => {
      setValue(val.name, formData[val.name]);
    });
  };

  useEffect(() => {
    console.log("formData", formData);
    if (formData) {
      setValues(formData);
    }
  }, [formData]);

  const watchData = watch();

  const watchSalary = watch("salary", "");

  console.log("watchSalary", watchSalary);

  return (
    <Container>
      <FormContainer>
        <FlexHeader>
          <Heading>{label}</Heading>
        </FlexHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {controls.map((val) => {
              if (
                val.dependencies &&
                !val.dependencies.every((dep) => watchData[dep])
              ) {
                return null;
              }

              const FormItem = controlMapping[val.controllerType];
              return (
                <>
                  <Grid item xs={12} md={val.grid || "12"}>
                    {" "}
                    <FormItem
                      style={{ width: "100%" }}
                      control={control}
                      {...val}
                      error={!!errors[val.name]}
                      helperText={errors[val.name]?.message}
                    />{" "}
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            style={{ marginTop: "20px" }}
          >
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {activeStep !== formControls.length - 1 ? "Next" : "Submit"}
            </Button>
          </Box>
        </form>
      </FormContainer>
    </Container>
  );
};

export default MultiStepForm;
