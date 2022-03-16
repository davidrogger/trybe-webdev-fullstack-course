import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Ensure if the elements are render in the document', () => {
  it('Should have a input type email, with a label text Email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  it('Should have render two buttons', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  })
  it('Should have a button with the label "Enviar" and the id-send property', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button')
    expect(btnSend).toHaveValue('Enviar')
  })  
})

describe('Ensure if the events are funccionals', () => {
  it('a', () => {
    render(<App />)

    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');

    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:')

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  })
})
