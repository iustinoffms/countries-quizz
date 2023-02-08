export const createAuthValidators = (
  setError: (key: string, value: string) => void
) => {
  return {
    validateEmail: (email: string) => {
      const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!email) {
        setError("email", "Email is required");
        return false;
      }
      if (!mailFormat.test(email)) {
        setError("email", "Invalid email address");
        return false;
      }
      setError("email", "");
      return true;
    },
    validatePassword: (password: string) => {
      const symbols = "!?#@$%^*";

      if (!password) {
        setError("password", "Password is required");
        return false;
      }
      if (password.length < 6) {
        setError("password", "Password must have min. 6 characters");
        return false;
      }
      if (!password.split("").some((char) => symbols.includes(char))) {
        setError("password", "Password must include one symbol");
        return false;
      }
      setError("password", "");
      return true;
    },
    validateUsername: (username: string) => {
      if (!username) {
        setError("username", "Field is required");
        return false;
      }
      setError("username", "");
      return true;
    },
    validateConfirmPassword: (password: string, confirmPassword: string) => {
      if (password !== confirmPassword) {
        setError("confirmPassword", "Password must be the same");
        return false;
      }
      setError("confirmPassword", "");
      return true;
    },
  };
};
