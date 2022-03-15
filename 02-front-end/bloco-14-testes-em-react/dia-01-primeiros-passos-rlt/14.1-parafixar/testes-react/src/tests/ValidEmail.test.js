import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../Components/ValidEmail';

describe('E-mail input validation', () => {
  it('Should render "Email Válido" when the e-mail input is correct', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
});
