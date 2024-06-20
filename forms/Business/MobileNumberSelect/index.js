import TextField from "@mui/material/TextField";
import React from "react";

import SelectCountryCode from "../CountryCodeSelect";

import { CountryCode, MobileNumber, RowConatainer } from "./styles";

function SelectMobileNumber({
  value = {},
  onChange,
  codeKey = "country_code",
  numberKey = "number",
  disable_country_code = false,
  ...rest
}) {
  console.log("restErrors", rest?.errors);
  const { [codeKey]: country_code = "", [numberKey]: number = "" } =
    value || {};

  const handleCodeChange = (v) => {
    onChange({ ...(value || {}), [codeKey]: v.target.value });
  };

  const handleNumberChange = (e) => {
    onChange({ ...(value || {}), [numberKey]: e.target.value });
  };

  return (
    <RowConatainer>
      <CountryCode>
        <SelectCountryCode
          {...rest}
          value={country_code || (value || {})[codeKey]}
          onChange={handleCodeChange}
          // placeholder="Select"
          name=""
          disabled={disable_country_code}
        />
      </CountryCode>

      <MobileNumber>
        <TextField
          {...rest}
          variant="outlined"
          label="Mobile Number"
          id="outlined-basic"
          name="mobile_number"
          type="number"
          value={number || (value || {})[numberKey]}
          error={rest.errors}
          helperText={rest?.errors?.number?.message}
          onChange={handleNumberChange}
        />
      </MobileNumber>
    </RowConatainer>
  );
}

export default SelectMobileNumber;
