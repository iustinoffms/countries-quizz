import * as React from "react";
import EmailField from "components/EmailField/EmailField";
import { useForm } from "../hooks/useForm";
import PasswordField from "components/PasswordField/PasswordField";
import { createAuthValidators } from "../utils/validations";

export const LoginForm = () => {
  const { formState, onInputChange, setFormError } = useForm();

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validators = createAuthValidators(setFormError);

    const validEmail = validators.validateEmail(formState.email);
    const validPassword = validators.validatePassword(formState.password);

    if (validEmail && validPassword) {
      console.log(formState);
    }
  };

  return (
    <div className="border-2 bg-cyan-900 px-12 py-6 w-[400px] flex flex-col gap-14 text-red-50">
      <h2 className="border-3 text-3xl">LOGIN</h2>

      <form className="flex flex-col gap-8" onSubmit={formSubmit}>
        <EmailField
          value={formState.email}
          onInputChange={onInputChange}
          formKey="email"
          inputError={formState.errors.email}
          label="Email"
        />
        <PasswordField
          value={formState.password}
          onInputChange={onInputChange}
          formKey="password"
          inputError={formState.errors.password}
          label="Password"
        />
        <input
          type="submit"
          name="login"
          value="Login"
          className="border-1 py-3 bg-sky-400 w-full cursor-pointer text-slate-900"
        />
      </form>
    </div>
  );
};
