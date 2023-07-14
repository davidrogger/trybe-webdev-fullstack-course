// src/App.test.tsx

import { render, screen } from '@testing-library/react';

import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';

it('Renderiza texto da página inicial', () => {
  render(<App />, { wrapper: BrowserRouter }  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})
