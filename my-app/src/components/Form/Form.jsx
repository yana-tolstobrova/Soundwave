import React from 'react';
import { useFormik } from 'formik';
import { ValidateForm } from './validateForm';
import { storeData } from './storeData';

export function SignupForm () {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      
    },
    validate: ValidateForm, 
    onSubmit: values => {
        
      storeData(values)

      alert('Welcome to the Soundwave! Join the fun!');

      formik.resetForm()
      
    }
  });
  return (
      <form onSubmit={formik.handleSubmit} className='text-white flex-col flex self-center bg-footer-form-icon-bg px-10 py-7 rounded-xl z-20 my-6 w-[22rem] md:w-[30rem] md:my-10 xl:my-0'>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.name && formik.errors.name ? (
        <div className='text-xs text-accent-text'>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="email" className='mt-5'>Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-1 focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='text-xs text-accent-text'>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password" className='mt-5'>Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-1 focus:outline-none focus:border-border-input-focus mt-2'
      />
      {formik.touched.password && formik.errors.password ? (
        <div className='text-xs text-accent-text'>{formik.errors.password}</div>
      ) : null}

      <button  type="submit" className='text-sm bg-button-bg py-2 rounded-xl hover:bg-button-hover focus:bg-button-focus w-full mt-5'>Join Now</button>
      </form>
  );
};






