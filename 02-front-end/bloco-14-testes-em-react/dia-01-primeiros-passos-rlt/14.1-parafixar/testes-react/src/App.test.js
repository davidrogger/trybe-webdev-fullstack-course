import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste', () => {
  test('Verifica se existe um input, com label Email, e que tenha a propridade de tipo como email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
})
