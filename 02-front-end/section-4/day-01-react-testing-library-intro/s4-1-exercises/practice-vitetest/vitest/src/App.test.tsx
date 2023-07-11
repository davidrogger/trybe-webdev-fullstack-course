import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

it('Should render label "Email"', () => {
  render(<App />);
  expect(screen.getByLabelText('Email:')).toBeInTheDocument();
});

it('Should render button "Enviar"', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
});

it('Should render button "Voltar"', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: 'Voltar' })).toBeInTheDocument();
});

it('Should save the email in sided with "Value:" message when clicked in "Enviar"', async () => {
  render(<App />);
  const emailInput = screen.getByLabelText('Email:');
  const sendBtn = screen.getByRole('button', { name: 'Enviar' });
  const emailSaved = screen.getByRole('heading', { name: 'Valor:' });

  const EMAIL_TYPED = 'teste@teste.com';

  await userEvent.type(emailInput, EMAIL_TYPED);
  await userEvent.click(sendBtn);

  expect(emailInput).toBeEmptyDOMElement();
  expect(emailSaved).toHaveTextContent(`Valor: ${EMAIL_TYPED}`);
  
});