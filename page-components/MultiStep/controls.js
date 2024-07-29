import {
  InputController,
  MobileNumberController,
  SelectController,
  TextFieldController,
} from "@/forms";

export const generateMultiStep = (t) => [
  {
    label: t("Personal Info"),
    controls: [
      {
        controllerType: "input",
        type: "text",
        name: "full_name",
        id: "outlined-error-helper-text",
        label: t("Full Name"),
        placeholder: t("Full Name"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Full Name is required"),
          },
          maxLength: {
            value: 50,
            message: t("Input exceeds maximum length of 50 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "first",
        id: "outlined-error-helper-text",
        label: t("First"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("First is required"),
          },
          maxLength: {
            value: 50,
            message: t("Input exceeds maximum length of 50 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "last",
        id: "outlined-error-helper-text",
        label: t("Last"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Last Name is required"),
          },
          maxLength: {
            value: 50,
            message: t("Input exceeds maximum length of 50 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "salary",
        id: "outlined-error-helper-text",
        label: t("Salary"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Salary is required"),
          },
          maxLength: {
            value: 50,
            message: t("Input exceeds maximum length of 50 characters"),
          },
        },
        dependencies: ["first", "last"],
      },
      {
        controllerType: "input",
        type: "text",
        grid: 6,
        id: "outlined-basic",
        label: t("Pin Code"),
        variant: "outlined",
        name: "pincode",
        validation: {
          required: {
            value: true,
            message: t("Pin Code is required"),
          },
        },
      },
    ],
  },
  {
    label: t("Account Info"),
    controls: [
      {
        controllerType: "select",
        type: "select",
        name: "country",
        label: t("Country"),
        id: "outlined-error-helper-text",
        grid: 6,
        validation: {
          required: {
            value: true,
            message: t("Country is required"),
          },
        },
        options: [
          { label: t("India"), value: "india" },
          { label: t("Iceland"), value: "iceland" },
          { label: t("Algeria"), value: "algeria" },
          { label: t("Nepal"), value: "nepal" },
          { label: t("Japan"), value: "japan" },
        ],
      },
      {
        controllerType: "textArea",
        type: "text",
        name: "address",
        id: "outlined-basic",
        label: t("Address"),
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Address is required"),
          },
        },
        multiline: true,
        rows: 2,
      },
      {
        controllerType: "input",
        type: "text",
        name: "bankss",
        id: "outlined-error-helper-text-bank",
        label: t("Bankss"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Bankss is required"),
          },
          minLength: {
            value: 4,
            message: t("Input min length of 4 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "accountNo",
        id: "outlined-error-helper-text",
        label: t("Account No"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Account No is required"),
          },
          minLength: {
            value: 10,
            message: t("Input min length of 4 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "ifsc",
        id: "outlined-error-helper-text",
        label: t("IFSC"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("IFSC is required"),
          },
          minLength: {
            value: 10,
            message: t("Input min length of 4 characters"),
          },
        },
      },
    ],
  },
  {
    label: t("Bank Account Info"),
    controls: [
      {
        controllerType: "input",
        type: "text",
        name: "accountName",
        id: "outlined-basic",
        label: t("Account Name"),
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Account Name is required"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "account_no",
        id: "outlined-error-helper-text-bank",
        label: t("Account No"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Account No is required"),
          },
          minLength: {
            value: 4,
            message: t("Input min length of 4 characters"),
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "cibil_score",
        id: "outlined-error-helper-text",
        label: t("Cibil Score"),
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: t("Cibil Score is required"),
          },
          minLength: {
            value: 10,
            message: t("Input min length of 4 characters"),
          },
        },
      },
    ],
  },
];

export const controlMapping = {
  input: InputController,
  select: SelectController,
  countryMobile: MobileNumberController,
  textArea: TextFieldController,
};


export const buttonLabels = (t) => ({
  next: t("Next"),
  back: t("Back"),
  submit: t("Submit"),
});
