import { ValidateForm } from './validateForm';

describe('ValidateForm', () => {
    
    it('should return errors object with "Required" for an empty name', () => {
    const values = {
      name: '',
      email: 'test@gmail.com',
      password: 'password123',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({
      name: 'Required',
    });
    });
    
   it('should return errors object with "Required" for an empty password', () => {
    const values = {
      name: 'Yana',
      email: 'yana@gmail.com',
      password: '',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({
      password: 'Required',
    });
    }); 
    
  it('should return errors object with "Required" for an empty email', () => {
    const values = {
      name: 'Sylvia',
      email: '',
      password: 'password123',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({
      email: 'Required',
    });
  });
    
    it('should return errors object with "Invalid email address" for an invalid email', () => {
    const values = {
      name: 'Flor',
      email: 'invalidemail',
      password: 'password123',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({
      email: 'Invalid email address',
    });
  });

  it('should return errors object with "Must be minimum 8 characters, have at least 1 letter and 1 number" for a password that does not meet the requirements', () => {
    const values = {
      name: 'Denise',
      email: 'denise@example.com',
      password: '1234567',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({
      password: 'Must be minimum 8 characters, have at least 1 letter and 1 number',
    });
  });

  it('should return an empty errors object when all fields are valid', () => {
    const values = {
      name: 'Rous',
      email: 'rous@example.com',
      password: 'password123',
    };
    const errors = ValidateForm(values);

    expect(errors).toEqual({});
  });
});

