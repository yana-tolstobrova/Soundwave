/*import React from 'react';
export function Form() {
  return (
    <div>
      <form className='text-white flex-col flex w-[30rem] bg-footer-form-icon-bg px-10 py-7 rounded-xl'>
              <label htmlFor='name' className='mb-2'>Name:</label>
              <input type='text' name='name' id='name' required className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus mt-2'></input>
              <label htmlFor='email' className='mb-2'>Email:</label>
              <input type='email' name='email' id='email' required className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus'></input>
              <label htmlFor='password' className='mb-2'>Password:</label>
              <input type='password' name='password' id='password' required className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus'></input>
              <button onClick={SubmitForm} id='buttonSubmitForm' type='submit' value='Submit' className='text-sm bg-button-bg py-2 rounded-xl hover:bg-button-hover focus:bg-button-focus w-full'>Join Now</button>
        </form>
    </div>
                

  )
}
function SubmitForm(e) {
  
}*/
import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
  }
  
  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/i.test(values.email)) {
    errors.password = 'Must be 20 characters or less';
  }

  

  return errors;
};

export function SignupForm () {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='text-white flex-col flex w-[30rem] bg-footer-form-icon-bg px-10 py-7 rounded-xl'>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit" className='text-sm bg-button-bg py-2 rounded-xl hover:bg-button-hover focus:bg-button-focus w-full'>Join Now</button>
    </form>
  );
};