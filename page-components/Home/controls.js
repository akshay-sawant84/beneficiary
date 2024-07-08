import {
  InputController,
  MobileNumberController,
  SelectController,
  TextFieldController,
} from "@/forms";

export const controls = [
  {
    controllerType: "input",
    type: "text",
    name: "full_name",
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
      {
        label: "India",
        value: "india",
      },
      {
        label: "Iceland",
        value: "iceland",
      },
      {
        label: "Algeria",
        value: "algeria",
      },
      {
        label: "Nepal",
        value: "nepal",
      },
      {
        label: "Japan",
        value: "japan",
      },
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
    controllerType: "countryMobile",
    type: "business",
    name: "mobileNumber",
    id: "outlined-basic",
    variant: "outlined",
    grid: 6,
    value: { country_code: "+91" },
    validation: {
      required: {
        value: true,
        message: "Mobile Number is required",
      },
      validate: (value) => {
        console.log("value", value);
        const { country_code, number } = value || {};

        if (!country_code) {
          return "Mobile Number Country Code is Required";
        }

        if (!number) {
          return "Mobile Number is required";
        }

        return undefined;
      },
    },
  },
  {
    controllerType: "input",
    type: "number",
    min: "1",
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
];

export const controlMapping = {
  input: InputController,
  adhar: InputController,
  select: SelectController,
  countryMobile: MobileNumberController,
  textArea: TextFieldController,
};
