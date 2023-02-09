import React from "react";
import EmailField from "components/EmailField/EmailField";
import UsernameField from "components/UsernameField/UsernameField";
import { useForm } from "../hooks/useForm";
import PasswordField from "components/PasswordField/PasswordField";
import { createAuthValidators } from "../utils/validations";

export const RegisterForm = () => {
  const { formState, onInputChange, setFormError } = useForm({
    values: { email: "", username: "", password: "", confirmPassword: "" },
  });
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validators = createAuthValidators(setFormError);

    const validEmail = validators.validateEmail(formState.values.email);
    const validUsername = validators.validateUsername(
      formState.values.username
    );
    const validPassword = validators.validatePassword(
      formState.values.password
    );
    const validConfirmPass = validators.validateConfirmPassword(
      formState.values.password,
      formState.values.confirmPassword
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
          value={formState.values.email}
          onInputChange={onInputChange}
          formKey="email"
          label="Email"
          inputError={formState.errors.email}
        />
        <UsernameField
          value={formState.values.username}
          onInputChange={onInputChange}
          formKey="username"
          label="Full Name"
          inputError={formState.errors.username}
        />
        <PasswordField
          value={formState.values.password}
          onInputChange={onInputChange}
          formKey="password"
          label="Password"
          inputError={formState.errors.password}
        />
        <PasswordField
          value={formState.values.confirmPassword}
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
