import * as React from "react";
import FormInput, { FormInputProps } from "../FormInput/FormInput";

const PasswordField = (props: FormInputProps) => {
  const { value, onInputChange, formKey, inputError, label } = props;
  return (
    <FormInput
      value={value}
      onInputChange={onInputChange}
      formKey={formKey}
      inputError={inputError}
      label={label}
      type="password"
    />
  );
};

export default PasswordField;
