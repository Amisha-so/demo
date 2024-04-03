import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFormData } from '../storedata/formslice';

const FormPage: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateName = (name: string) => {
    return name.length >= 3;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length >= 10;
  };

  const handleContinue = () => {
    dispatch(setFormData({ name, email, phoneNumber }));
  };

  const isFormValid =
    validateName(name) &&
    validateEmail(email) &&
    validatePhoneNumber(phoneNumber);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
        error={!validateName(name)}
        helperText={!validateName(name) && 'Name should have at least 3 characters'}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        variant="outlined"
        type="email"
        sx={{ mb: 2 }}
        error={!validateEmail(email)}
        helperText={!validateEmail(email) && 'Please enter a valid email address'}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
        error={!validatePhoneNumber(phoneNumber)}
        helperText={!validatePhoneNumber(phoneNumber) && 'Phone number should have at least 10 digits'}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleContinue}
        disabled={!isFormValid}
        fullWidth
      >
        Continue
      </Button>
    </div>
  );
};

export default FormPage;
