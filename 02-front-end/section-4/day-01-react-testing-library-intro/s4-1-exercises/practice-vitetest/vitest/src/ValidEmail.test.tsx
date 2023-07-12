import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

it('Should show email valid text when the case is valid', () => {
  const EMAIL_USER = 'teste@teste.com';
  
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText(/Email Válido/i);
  expect(isValid).toBeInTheDocument();
})

it('Should show email invalid text when the case is invalid', () => {
  const EMAIL_USER = 'teste.com';
  
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText(/Email Inválido/i);
  expect(isValid).toBeInTheDocument();
})