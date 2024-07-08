import * as Yup from "yup";
import { useTranslation } from "next-i18next";

const checkAadhaarExists = async () => {
  const response = await fetch(
    `https://mocki.io/v1/c29621ae-2b54-4b8f-888d-fb798491b624`
  );
  const data = await response.json();
  return data.validation;
};

export const generateYupSchema = (controls) => {
  const { t } = useTranslation("home");
  const schema = controls.reduce((acc, control) => {
    let fieldSchema;

    switch (control.controllerType) {
      case "input":
      case "text":
      case "textArea":
        fieldSchema = Yup.string();
        break;
      case "number":
        fieldSchema = Yup.number();
        break;
      case "select":
        fieldSchema = Yup.string();
        break;
      case "countryMobile":
        fieldSchema = Yup.object()
          .shape({
            country_code: Yup.string().required("Country code is required"),
            number: Yup.string().required("Mobile number is required"),
          })
          .required("Country code and Mobile number are required");
        break;
      case "adhar":
        fieldSchema = Yup.string()
          .required("Aadhaar number is required")
          .matches(/^\d{12}$/, "Aadhaar number must be exactly 12 digits")
          .test(
            "checkAadhaarExists",
            "Aadhaar number is incorrect",
            async (value) => {
              if (value) {
                if (value && /^\d{12}$/.test(value)) {
                  const exists = await checkAadhaarExists(value);
                  return !exists;
                }
                return "number must be exactly 12 digits";
              }
              return true;
            }
          );
        break;
      default:
        fieldSchema = Yup.mixed();
    }

    if (control.validation) {
      if (
        control.validation.required?.value &&
        control.controllerType !== "countryMobile"
      ) {
        // fieldSchema = fieldSchema.required(control.validation.required.message);
        // fieldSchema = fieldSchema.required(
        //   t(`${control.name}.validation.required.message`) ||
        //     control.validation.required.message
        // );
        fieldSchema = fieldSchema.required(
          t(`${control.name}.validation.required.message`, {
            defaultValue: control.validation.required.message,
          })
        );
      }

      if (control.validation.maxLength?.value) {
        fieldSchema = fieldSchema.max(
          control.validation.maxLength.value,
          t(`${control.name}.validation.maxLength.message`, {
            defaultValue: control.validation.maxLength.message,
          })
        );
      }

      if (control.validation.minLength?.value) {
        fieldSchema = fieldSchema.min(
          control.validation.minLength?.value,
          t(`${control.name}.validation.minLength?.message`, {
            defaultValue: control.validation.minLength?.message,
          })
        );
      }

      //   if (control.controllerType === "countryMobile") {
      //     fieldSchema = Yup.object()
      //       .shape({
      //         country_code: Yup.string().required("Country code is required"),
      //         number: Yup.string().required("Mobile number is required"),
      //       })
      //       .required("Country code and Mobile number are required");
      //   }
    }

    acc[control.name] = fieldSchema;
    return acc;
  }, {});

  console.log("schema", schema);

  return Yup.object().shape(schema);
};

// Now you can use validationSchema with your form library
