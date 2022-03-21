import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe('All aplication tests', () => {

  it('Should render the "<App />" component', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('heading', { name: 'Você está na página Início' });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Should change de component "página inicial" to "página sobre" after clicked in the link', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  
    const aboutTitle = screen.getByRole('heading', {name: 'Você está na página Sobre'});
    expect(aboutTitle).toBeInTheDocument();
  })

  it('Should test a wrong path and return Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading', { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument();
  })
})

describe('Testing each component individualy', () => {
  it('Should render the about component', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' })
    expect(aboutTitle).toBeInTheDocument();
  })
})
