import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SignupForm } from './Form';

describe('SignupForm', () => {

  it('submits the form and resets the form state', () => {
    render(<SignupForm />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: 'Alex' } });
    fireEvent.change(emailInput, { target: { value: 'alex@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByText('Join Now');
      
    fireEvent.click(submitButton);
      
    expect(window.alert).toHaveBeenCalledWith('Welcome to the Soundwave! Join the fun!');


    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
});
