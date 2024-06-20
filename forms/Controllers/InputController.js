import Input from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";

function InputController(props) {
  const { name, control, validation, defaultValue = "", ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={validation}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Input
            {...rest}
            id={name}
            value={value}
            onChange={(event) => {
              onChange(event);
              rest.onChange?.(event);
            }}
            onBlur={(event) => {
              onBlur(event);
              rest.onBlur?.(event);
            }}
          />
        );
      }}
    />
  );
}

export default InputController;
