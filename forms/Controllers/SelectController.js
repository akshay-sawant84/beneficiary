import Select from "@mui/material/Select";
import React from "react";
import { Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

function SelectController(props) {
  const { name, control, value, validation, options = [], ...rest } = props;

  console.log("validation", validation);

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
        <FormControl fullWidth error={!!error}>
          {console.log("erroMs", props)}
          <InputLabel id="demo-simple-select-label">{rest.label}</InputLabel>
          <Select
            {...rest}
            id={name}
            key={rest.id}
            label={rest.label}
            value={newValue || ""}
            onChange={(event) => {
              onChange(event);
              rest.onChange?.(event);
            }}
            onBlur={(event) => {
              onBlur(event);
              rest.onBlur?.(event);
            }}
          >
            {options.map((val) => (
              <MenuItem key={val.value} value={val.value}>
                {val.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
export default SelectController;
