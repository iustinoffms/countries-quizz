import * as React from "react";

export const useRegister = () => {
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

  const validateEmail = (email: string) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      setFormError("email", "Field is required");
      return false;
    }
    if (!mailFormat.test(email)) {
      setFormError("email", "Invalid email address");
      return false;
    }
    setFormError("email", "");
    return true;
  };

  const validateUsername = (username: string) => {
    if (!username) {
      setFormError("username", "Field is required");
      return false;
    }
    setFormError("username", "");
    return true;
  };

  const validatePassword = (password: string) => {
    const symbols = "!?#@$%^*";
    if (!password) {
      setFormError("password", "Field is required");
      return false;
    }
    if (!password.split("").some((char) => symbols.includes(char))) {
      setFormError("password", "Invalid Password. Must include one symbol");
      return false;
    }
    setFormError("password", "");
    return true;
  };

  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    if (password !== confirmPassword) {
      setFormError("confirmPassword", "Password must be the same");
      return false;
    }
    setFormError("confirmPassword", "");
    return true;
  };

  return {
    formState,
    onInputChange,
    validateEmail,
    validateUsername,
    validatePassword,
    validateConfirmPassword,
  };
};
