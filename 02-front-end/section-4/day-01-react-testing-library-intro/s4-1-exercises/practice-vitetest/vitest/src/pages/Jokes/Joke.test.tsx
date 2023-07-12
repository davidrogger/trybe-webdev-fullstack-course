import { render, screen } from '@testing-library/react';
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

});