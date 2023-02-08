import React from "react";
import EmailField from "components/EmailField/EmailField";
import UsernameField from "components/UsernameField/UsernameField";
import { useRegister } from "../hooks/useRegister";
import PasswordField from "components/PasswordField/PasswordField";

export const RegisterForm = () => {
  const {
    formState,
    onInputChange,
    validateEmail,
    validateUsername,
    validatePassword,
    validateConfirmPassword,
  } = useRegister();
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validEmail = validateEmail(formState.email);
    const validUsername = validateUsername(formState.username);
    const validPassword = validatePassword(formState.password);
    const validConfirmPass = validateConfirmPassword(
      formState.password,
      formState.confirmPassword
    );
    if (validEmail && validUsername && validPassword && validConfirmPass) {
      console.log(formState);
    }
  };

  return (
    <div className="border-2 bg-cyan-900 px-12 py-6 w-[400px] flex flex-col gap-14 text-red-50">
      <h2 className="border-3 text-3xl">REGISTER</h2>

      <form className="flex flex-col gap-8" onSubmit={formSubmit}>
        <EmailField
          value={formState.email}
          onInputChange={onInputChange}
          formKey="email"
          label="Email"
          inputError={formState.errors.email}
        />
        <UsernameField
          value={formState.username}
          onInputChange={onInputChange}
          formKey="username"
          label="Full Name"
          inputError={formState.errors.username}
        />
        <PasswordField
          value={formState.password}
          onInputChange={onInputChange}
          formKey="password"
          label="Password"
          inputError={formState.errors.password}
        />
        <PasswordField
          value={formState.confirmPassword}
          onInputChange={onInputChange}
          formKey="confirmPassword"
          label="Confirm Password"
          inputError={formState.errors.confirmPassword}
        />
        <input
          type="submit"
          name="register"
          value="Register"
          className="border-1 py-3 bg-sky-400 w-full cursor-pointer text-slate-900"
        />
      </form>
    </div>
  );
};
