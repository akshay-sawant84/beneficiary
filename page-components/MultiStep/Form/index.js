import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import { generateYupSchema } from "@/utils/yupSchemaValidator";
import { Container, FormContainer, FlexHeader, Heading } from "../styles";
import { controlMapping } from "../controls";
import { useForm } from "@/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { buttonLabels } from "../controls"; 
import { useTranslation } from "react-i18next";

const MultiStepForm = ({
  controls: formControls,
  setFormData,
  formData,
  activeStep,
  setActiveStep,
  setCompleted,
}) => {
  const { t } = useTranslation("home");
  const { label = "", controls = [] } = formControls[activeStep] || {};
  const schema = generateYupSchema(controls);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true,
  });

  const { next, back, submit } = buttonLabels(useTranslation("home").t);

  useEffect(() => {
    if (formData) {
      controls.forEach((val) => {
        if (formData[val.name]) {
          setValue(val.name, formData[val.name]);
        }
      });
    }
  }, [formData, controls, setValue]);

  const onSubmit = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
    if (activeStep < formControls.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

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
                !val.dependencies.every((dep) => watch(dep))
              ) {
                return null;
              }

              const FormItem = controlMapping[val.controllerType];
              return (
                <Grid item xs={12} md={val.grid || 12} key={val.name}>
                  <FormItem
                    style={{ width: "100%" }}
                    control={control}
                    {...val}
                    error={!!errors[val.name]}
                    helperText={errors[val.name]?.message}
                    placeholder={t(`${val.name}.label`)}
                    label={t(`${val.name}.label`)} 
                  />
                </Grid>
              );
            })}
          </Grid>
          <Box display="flex" justifyContent="center" style={{ marginTop: "20px" }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              {back}
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {activeStep < formControls.length - 1 ? next : submit}
            </Button>
          </Box>
        </form>
      </FormContainer>
    </Container>
  );
};

export default MultiStepForm;
