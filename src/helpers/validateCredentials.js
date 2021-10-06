export default function validateCredentials(credentials) {
  const { displayName, email, password, confirmPassword } = credentials;
  let errors = {};

  if (!displayName.trim()) {
    errors.displayName = "Display name required";
  }

  if (!email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be longer than 8 characters";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
