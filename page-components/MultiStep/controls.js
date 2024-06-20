import {
  InputController,
  MobileNumberController,
  SelectController,
  TextFieldController,
} from "@/forms";

export const multiStep = [
  {
    label: "Personal Info",
    controls: [
      {
        controllerType: "input",
        type: "text",
        name: "fullName",
        id: "outlined-error-helper-text",
        label: "Full Name",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Full Name is required",
          },
          maxLength: {
            value: 3,
            message: "Input exceeds maximum length of 3 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "first",
        id: "outlined-error-helper-text",
        label: "first",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "First is required",
          },
          maxLength: {
            value: 50,
            message: "Input exceeds maximum length of 50 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "last",
        id: "outlined-error-helper-text",
        label: "last",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "last Name is required",
          },
          maxLength: {
            value: 50,
            message: "Input exceeds maximum length of 50 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "salary",
        id: "outlined-error-helper-text",
        label: "Salary",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Salary is required",
          },
          maxLength: {
            value: 50,
            message: "Input exceeds maximum length of 50 characters",
          },
        },
        dependencies: ["first", "last"],
      },
      {
        controllerType: "input",
        type: "text",
        grid: 6,
        id: "outlined-basic",
        label: "Pin Code",
        variant: "outlined",
        name: "pincode",
        validation: {
          required: {
            value: true,
            message: "Pin Code is required",
          },
        },
      },
    ],
  },
  {
    label: "Account Info",
    controls: [
      {
        controllerType: "select",
        type: "select",
        name: "country",
        label: "Country",
        id: "outlined-error-helper-text",
        grid: 6,
        validation: {
          required: {
            value: true,
            message: "Country is required",
          },
        },
        options: [
          { label: "India", value: "india" },
          { label: "Iceland", value: "iceland" },
          { label: "Algeria", value: "algeria" },
          { label: "Nepal", value: "nepal" },
          { label: "Japan", value: "japan" },
        ],
      },
      {
        controllerType: "textArea",
        type: "text",
        name: "address",
        id: "outlined-basic",
        label: "Address",
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Address is required",
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
        label: "Bankss",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Bankss is required",
          },
          minLength: {
            value: 4,
            message: "Input min length of 4 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "accountNo",
        id: "outlined-error-helper-text",
        label: "Account No",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Account No is required",
          },
          minLength: {
            value: 10,
            message: "Input min length of 4 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "ifsc",
        id: "outlined-error-helper-text",
        label: "IFSC",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "IFSC is required",
          },
          minLength: {
            value: 10,
            message: "Input min length of 4 characters",
          },
        },
      },
    ],
  },
  {
    label: "Bank Account",
    controls: [
      {
        controllerType: "input",
        type: "text",
        name: "accountName",
        id: "outlined-basic",
        label: "Account name",
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Name is required",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "account_no",
        id: "outlined-error-helper-text-bank",
        label: "Account No",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Account No is required",
          },
          minLength: {
            value: 4,
            message: "Input min length of 4 characters",
          },
        },
      },
      {
        controllerType: "input",
        type: "text",
        name: "cibil_score",
        id: "outlined-error-helper-text",
        label: "Account No",
        grid: 6,
        variant: "outlined",
        validation: {
          required: {
            value: true,
            message: "Cobil Score is required",
          },
          minLength: {
            value: 10,
            message: "Input min length of 4 characters",
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
