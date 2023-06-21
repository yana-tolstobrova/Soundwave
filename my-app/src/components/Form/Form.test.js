import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { SignupForm } from './Form';
import { storeData } from './storeData';

jest.mock('./storeData', () => ({
  storeData: jest.fn(),
}));

describe('SignupForm', () => {
  let windowAlert;

  beforeEach(() => {
    windowAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    windowAlert.mockRestore();
  });

  it('submits the form and resets the form state', async () => {
    render(<SignupForm />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: 'Alex' } });
    fireEvent.change(emailInput, { target: { value: 'alex@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = screen.getByText('Join Now');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(storeData).toHaveBeenCalledWith({
      name: 'Alex',
      email: 'alex@example.com',
      password: 'password123',
    });

    expect(windowAlert).toHaveBeenCalledWith('Welcome to the Soundwave! Join the fun!');

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    
  });


  it('error message for invalid email', async () => {
    render(<SignupForm />);

    const emailInput = screen.getByLabelText('Email:');


    fireEvent.change(emailInput, { target: { value: 'abcd' } });


    const submitButton = screen.getByText('Join Now');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    
  })

  it('error message for invalid password', async () => {
    render(<SignupForm />);

    const passwordInput = screen.getByLabelText('Password:');


    fireEvent.change(passwordInput, { target: { value: '1234' } });


    const submitButton = screen.getByText('Join Now');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(screen.getByText("Must be minimum 8 characters, have at least 1 letter and 1 number")).toBeInTheDocument();
    
  })

  it('error message "required" for empty name input', async () => {
    render(<SignupForm />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'alex@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'sdfg3456s' } });


    const submitButton = screen.getByText('Join Now');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

    const errorMessages = screen.queryAllByText('Required');
    expect(errorMessages.length).toBe(1);
    expect(errorMessages[0]).toBeInTheDocument();
    
  });

  it('error messages "required" for all empty inputs', async () => {
    render(<SignupForm />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });


    const submitButton = screen.getByText('Join Now');

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(submitButton);
    });

  const errorMessages = screen.queryAllByText('Required');
  expect(errorMessages.length).toBe(3); 
  expect(errorMessages[0]).toBeInTheDocument();
    
  })

});
