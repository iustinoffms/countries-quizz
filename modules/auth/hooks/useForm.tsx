import * as React from "react";

export interface UseFormConfig {
  values: Record<string, any>;
}
export interface UseFormState {
  values: Record<string, any>;
  errors: Record<string, any>;
}
export const useForm = (config: UseFormConfig) => {
  const [formState, setFormState] = React.useState<UseFormState>(() => {
    const stateValues = Object.keys(config.values);
    const errors = stateValues.reduce(
      (acc, currentKey) => ({
        ...acc,
        [currentKey]: "",
      }),
      {}
    );
    return { values: config.values, errors };
  });

  const setFormError = (formKey: string, errorMessage: string) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        errors: { ...prevState.errors, [formKey]: errorMessage },
      };
    });
  };

  const onInputChange = (formKey: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevState) => {
        return {
          ...prevState,
          values: { ...prevState.values, [formKey]: e.target.value },
        };
      });
    };
  };

  return {
    formState,
    onInputChange,
    setFormError,
  };
};
