import * as React from "react";
import FormInput, { FormInputProps } from "../FormInput/FormInput";

const PasswordField = (props: FormInputProps) => {
  const { value, onInputChange, formKey, inputError, label, ...rest } = props;
  return (
    <FormInput
      value={value}
      onInputChange={onInputChange}
      formKey={formKey}
      inputError={inputError}
      label={label}
      type="password"
      {...rest}
    />
  );
};

export default PasswordField;
