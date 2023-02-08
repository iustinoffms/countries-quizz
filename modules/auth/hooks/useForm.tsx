import * as React from "react";

export const useForm = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    errors: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
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
        return { ...prevState, [formKey]: e.target.value };
      });
    };
  };

  return {
    formState,
    onInputChange,
    setFormError,
  };
};
