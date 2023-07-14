// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';

describe('Testing "App" behavior', () => {
  it('Should render the right text in the home screen', () => {
    render(<App />, { wrapper: BrowserRouter }  );
    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
  })
  
  it('Should render the right text in the about screen', async () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
  
    const aboutLink = screen.getByRole('link', { name: /Sobre/i});
    await userEvent.click(aboutLink);
    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  })
});
