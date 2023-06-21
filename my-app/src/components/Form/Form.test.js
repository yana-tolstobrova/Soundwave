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
});
