import { render, screen } from '@testing-library/react';

import App from './App';

it('Should render label "Email"', () => {
  render(<App />);
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
});

it('Should render button "Enviar"', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
});

it('Should render button "Voltar"', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument();
});
