import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useForm = (callback, validateCredentials) => {
  const [userCreds, setUserCreds] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCreds({
      ...userCreds,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateCredentials(userCreds));
  };

  //   useEffect(() => {
  //     if (Object.keys(errors).length === 0) {
  //       callback();
  //     }
  //   }, [errors]);

  return { handleSubmit, handleChange, userCreds, errors };
};

export default useForm;
