import { Controller } from "react-hook-form";

import MobileNumberSelect from "../Business/MobileNumberSelect";

function MobileNumberController({ itemKey, name, value, control, ...rest }) {
  return (
    <Controller
      key={itemKey}
      control={control}
      name={name}
      defaultValue={value}
      rules={rest.rules}
      shouldUnregister={rest.shouldUnregister}
      render={({
        field: { onChange, onBlur, value: newValue },
        formState: { errors },
      }) => (
        <MobileNumberSelect
          {...rest}
          key={itemKey}
          onChange={onChange}
          value={newValue}
          onBlur={onBlur}
          errors={errors[name]}
        />
      )}
    />
  );
}
export default MobileNumberController;
