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
  it('Shouldn\'t render the "Email Inválid or Valid" before sent the input', () => {
    render(<ValidEmail email='' />);

    const isValidText = screen.queryByTestId('id-validation');

    expect(isValidText).not.toBeInTheDocument();

  })

  it('Text should be red when invalid not green', () => {
    const EMAIL_INVALID = 'wrongemail';
    render(<ValidEmail email={ EMAIL_INVALID } />)

    const isInvalid = screen.getByText('Email Inválido');
    expect(isInvalid).toHaveAttribute('style', 'color: red;');
    expect(isInvalid).not.toHaveAttribute('style', 'color: green;');

  })
});
