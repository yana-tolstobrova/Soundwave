
const ValidateForm = values => {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = 'Required';
  }

  if (!values.email || !values.email.trim()) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
  }
  
  if (!values.password || !values.password.trim()) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
    errors.password = 'Must be minimum 8 characters, have at least 1 letter and 1 number';
  }
  return errors;
};
export { ValidateForm }

