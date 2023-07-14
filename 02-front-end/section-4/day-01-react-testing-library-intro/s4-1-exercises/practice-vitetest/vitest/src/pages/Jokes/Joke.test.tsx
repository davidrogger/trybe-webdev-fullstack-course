import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Jokes from '.';

describe('Testing fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const joke = 'Thanks for explaining the word "many" to me. It means a lot.';
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke,
    };

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => Promise.resolve(MOCK_JOKE),
    } as Response;

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    render(<Jokes />)
    const renderedJoke = await screen.findByText(joke);
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://icanhazdadjoke.com',
      {
        headers: { Accept: 'application/json' }
      });
  });
});

describe('Testing Button "New Joke"', () => {
  it('Should be rendered', () => {
    render(<Jokes />)

    const newJokeBtn = screen.getByRole('button', { name: 'New Joke' });

    expect(newJokeBtn).toBeInTheDocument();
  });

  it('Should render a new joke when clicked', async () => {
    const joke_load = 'Thanks for explaining the word "many" to me. It means a lot.';
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: joke_load,
    };
    const joke_onclick = 'New jokes for testing jokes';
    const MOCK_JOKE_ONCLICK = {
      id: 'bla213',
      joke: joke_onclick,
    };

    const MOCK_RESPONSE_LOAD = {
      ok: true,
      status: 200,
      json: async () => Promise.resolve(MOCK_JOKE),
    } as Response;
    
    const MOCK_RESPONSE_ONCLICK = {
      ok: true,
      status: 200,
      json: async () => Promise.resolve(MOCK_JOKE_ONCLICK),
    } as Response;
    
    const mockFetch = vi.spyOn(global, 'fetch')
      .mockResolvedValueOnce(MOCK_RESPONSE_LOAD)
      .mockResolvedValueOnce(MOCK_RESPONSE_ONCLICK);
      
      render(<Jokes />)

      const newJokeBtn = screen.getByRole('button', { name: 'New Joke' });
      
      expect(await screen.findByText(joke_load)).toBeInTheDocument();
      await userEvent.click(newJokeBtn);

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(await screen.findByText(joke_onclick)).toBeInTheDocument();
  });

});