import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Container, FormContainer, MainHeading } from "./styles";
import MultiStepForm from "./Form";
import { useTranslation } from "react-i18next";
import { generateMultiStep } from "./controls";

function MultiStep() {
  const { t } = useTranslation("home");
  const multiStep = generateMultiStep(t);

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [formData, setFormData] = useState({});

  const handleNext = (isStepValid) => {
    if (isStepValid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <FormContainer>
        <MainHeading>{t("beneficiary")}</MainHeading>
        <Stepper activeStep={activeStep}>
          {multiStep.map((step, index) => (
            <Step key={index} completed={completed[index]}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <MultiStepForm
          controls={multiStep}
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
