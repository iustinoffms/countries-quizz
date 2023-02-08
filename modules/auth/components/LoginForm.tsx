import * as React from "react";
import EmailField from "components/EmailField/EmailField";
import useLogin from "../hooks/useLogin";
import PasswordField from "components/PasswordField/PasswordField";

export const LoginForm = () => {
  const { formState, onInputChange, validateEmail, validatePassword } =
    useLogin();

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validEmail = validateEmail(formState.email);
    const validPassword = validatePassword(formState.password);

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