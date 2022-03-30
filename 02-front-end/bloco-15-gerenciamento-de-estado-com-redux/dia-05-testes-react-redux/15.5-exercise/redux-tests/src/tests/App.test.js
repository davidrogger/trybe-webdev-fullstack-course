import React from 'react';
// import App from '../App';
import TrafficSignal from '../TrafficSignal';
import Cars from '../Cars';
import { screen } from '@testing-library/react';
import renderWithRedux from './helper/renderWithRedux';
import userEvent from '@testing-library/user-event';

describe('Traffic Component Tests', () => {
  it('Should starts with red signal', () => {
    renderWithRedux(<TrafficSignal />);

    expect(screen.getByAltText('red-signal')).toBeInTheDocument();

  });
  it('Should starts with yellow signal', () => {
    renderWithRedux(<TrafficSignal />, { initialState: {signalColorReducer: {payload: 'yellow'}} });

    expect(screen.getByAltText('yellow-signal')).toBeInTheDocument();
  });
  it('Should have 3 buttons in the component and change de signal color after clicking it', () => {
    renderWithRedux(<TrafficSignal />);
    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(3);
    allButtons.forEach((button) => {
      userEvent.click(button);
      const color = button.textContent.toLocaleLowerCase();
      const image = screen.getByRole('img')
      expect(image).toHaveAttribute('src', `${color}Signal.jpeg`)
      expect(screen.getByAltText(`${color}-signal`)).toBeInTheDocument();
    })
  });
});

describe('Cars Component Tests', () => {
  it('Should Have 3 cars with 3 buttons', () => {
    renderWithRedux(<Cars />);
    const allCarsImage = screen.getAllByRole('img');
    const allButtons = screen.getAllByRole('button');
    expect(allCarsImage).toHaveLength(3);
    expect(allButtons).toHaveLength(3);
  });
  it('Should move the car a side, when the button is click it', () => {
    renderWithRedux(<Cars />);
    const allButtons = screen.getAllByRole('button');
    const allCarsImage = screen.getAllByRole('img');
    
    const carAlts = [`red car`, `blue car`, `yellow car`];

    allCarsImage.forEach((carImage, index) => {
      userEvent.click(allButtons[index]);
      expect(carImage).toHaveAttribute('class', 'car-right');
      expect(carImage).toHaveAttribute('alt', carAlts[index]);
    });
  })
})