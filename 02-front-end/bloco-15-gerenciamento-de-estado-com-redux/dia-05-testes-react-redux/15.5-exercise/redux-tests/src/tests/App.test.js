import React from 'react';
// import App from '../App';
import TrafficSignal from '../TrafficSignal';
import { screen } from '@testing-library/react';
import renderWithRedux from './helper/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('Traffic Component Tests', () => {
  it('Should starts with red signal', () => {
    renderWithRedux(<TrafficSignal />);

    expect(screen.getByAltText('red-signal')).toBeInTheDocument();

  });
  it('Should have 3 buttons in the component and change de signal color after clicking it', () => {
    renderWithRedux(<TrafficSignal />);
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(3);
    allButtons.forEach((button) => {
      userEvent.click(button);
      const altText = `${button.textContent.toLocaleLowerCase()}-signal`
      expect(screen.getByAltText(altText)).toBeInTheDocument();
    })    
  });
})