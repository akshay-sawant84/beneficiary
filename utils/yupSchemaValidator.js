import * as Yup from "yup";

export const generateYupSchema = (controls) => {
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
      default:
        fieldSchema = Yup.mixed();
    }

    if (control.validation) {
      if (
        control.validation.required?.value &&
        control.controllerType !== "countryMobile"
      ) {
        fieldSchema = fieldSchema.required(control.validation.required.message);
      }

      if (control.validation.maxLength?.value) {
        fieldSchema = fieldSchema.max(
          control.validation.maxLength.value,
          control.validation.maxLength.message
        );
      }

      if (control.validation.minLength?.value) {
        fieldSchema = fieldSchema.min(
          control.validation.minLength?.value,
          control.validation.minLength?.message
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
