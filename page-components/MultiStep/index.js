import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container, FormContainer, MainHeading } from "./styles";
import { multiStep as controls } from "./controls";
import MultiStepForm from "./Form";

function MultiStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formData, setFormData] = useState();

  const handleNext = (isStepValid) => {
    if (isStepValid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  console.log("completed", completed);

  return (
    <Container>
      <FormContainer>
        <MainHeading>Multi Step Form</MainHeading>
        <Stepper activeStep={activeStep}>
          {controls.map((label, index) => {
            return (
              <Step key={label.label} completed={completed[index]}>
                <StepLabel>{label.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <MultiStepForm
          controls={controls}
          handleNext={handleNext}
          formData={formData}
          setFormData={setFormData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setCompleted={setCompleted}
        />
      </FormContainer>
    </Container>
  );
}

export default MultiStep;
