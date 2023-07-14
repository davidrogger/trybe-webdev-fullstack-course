import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={() => moveCar('redCar', !redCar)} >Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={() => moveCar('blueCar', !blueCar)} >Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={() => moveCar('yellowCar', !yellowCar)} >Move</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  moveCar: (key, action) => dispatch(moveCar(key, action)),
});

const mapStateToProps = (state) => ({
  redCar: state.moveCarReducer.redCar,
  blueCar: state.moveCarReducer.blueCar,
  yellowCar: state.moveCarReducer.yellowCar,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);