
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import PropTypes from "prop-types";
import React from 'react';
import '../../SimpleCounter.css';

function SimpleCounter(props) {
  return (
    <div className="clockDisplay d-flex justify-content-center mt-5">
      <div className="clockImg ps-4">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="six">{props.digitSix}</div>
      <div className="five">{props.digitFive}</div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one pe-4">{props.digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};



export default SimpleCounter;