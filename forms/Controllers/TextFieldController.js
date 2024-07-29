import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";

function TextFieldController(props) {
  const { name, control, value, validation, placeholder, ...rest } = props;

  return (
    <Controller
      key={name}
      control={control}
      name={name}
      defaultValue={value}
      rules={validation}
      render={({
        field: { onChange, onBlur, value: newValue },
        fieldState: { error },
      }) => (
        <TextField
          {...rest}
          id={name}
          placeholder={placeholder} // Set placeholder here
          value={newValue || ""}
          onChange={(event) => {
            onChange(event);
            rest.onChange?.(event);
          }}
          onBlur={(event) => {
            onBlur(event);
            rest.onBlur?.(event);
          }}
          error={!!error}
          helperText={error ? error.message : ""}
        />
      )}
    />
  );
}
export default TextFieldController;
