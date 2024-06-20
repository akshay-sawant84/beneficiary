import { z } from "zod";
import isEmpty from "./isEmpty";

export const generateZodSchema = (controls) => {
  const schema = controls.reduce((acc, control) => {
    let fieldSchema;

    switch (control.controllerType) {
      case "input":
      case "text":
      case "textArea":
      case "number":
        fieldSchema = z.string();
        break;
      case "select":
        fieldSchema = z.string();
        break;
      case "countryMobile":
        fieldSchema = z.object({
          country_code: z.string(),
          number: z.string(),
        });
        break;
      default:
        fieldSchema = z.any();
    }

    if (control.validation) {
      if (control.validation.required?.value) {
        if (
          control.controllerType === "input" ||
          control.controllerType === "text" ||
          control.controllerType === "textArea" ||
          control.controllerType === "select" ||
          control.controllerType === "number"
        ) {
          // For input, text, textarea, select: require non-empty value
          fieldSchema = fieldSchema.nonempty(
            control.validation.required.message
          );
        } else {
          fieldSchema = fieldSchema.refine(
            (value) => !isEmpty(value?.number) && !isEmpty(value?.country_code),
            {
              message: "Country code and Mobile number are required",
            }
          );
        }
      }
      if (control.validation.maxLength?.value) {
        fieldSchema = fieldSchema.max(
          control.validation.maxLength.value,
          control.validation.maxLength.message
        );
      }
      if (control.validation.min?.value) {
        fieldSchema = fieldSchema.min(
          control.validation.min.value,
          control.validation.min.message
        );
      }
    }

    acc[control.name] = fieldSchema;
    return acc;
  }, {});

  console.log("schema", schema);

  return z.object(schema);
};
