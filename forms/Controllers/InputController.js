import Input from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";

function InputController(props) {
  const { name, control, validation, defaultValue = "", placeholder, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={validation}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => (
        <Input
          {...rest}
          id={name}
          value={value}
          placeholder={placeholder} 
          onChange={(event) => {
            onChange(event);
            rest.onChange?.(event);
          }}
          onBlur={(event) => {
            onBlur(event);
            rest.onBlur?.(event);
          }}
          error={!!errors[name]} 
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputController;
