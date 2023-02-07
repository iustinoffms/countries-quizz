import React from "react";

export type OnChangeFn = (
  formKey: string
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onInputChange: OnChangeFn;
  formKey: string;
  inputError: string;
  label: string;
}

const FormInput = (props: FormInputProps) => {
  const { value, onInputChange, formKey, inputError, label, type } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor={formKey}>{label} </label>
      <input
        className="py-2 text-black rounded-sm"
        type={type}
        name={formKey}
        id={formKey}
        value={value}
        onChange={onInputChange(formKey)}
      />
      <div className="email-error">{inputError}</div>
    </div>
  );
};

export default FormInput;
