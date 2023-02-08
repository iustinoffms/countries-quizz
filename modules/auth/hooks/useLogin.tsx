import * as React from "react";

export const useLogin = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    errors: {
      email: "",
      password: "",
    },
  });

  const onInputChange = (formKey: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prevState) => {
        return { ...prevState, [formKey]: e.target.value };
      });
    };
  };

  const setFormError = (errorKey: string, errorMessage: string) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        errors: { ...prevState.errors, [errorKey]: errorMessage },
      };
    });
  };

  return {
    formState,
    onInputChange,
    setFormError,
  };
};
export default useLogin;
