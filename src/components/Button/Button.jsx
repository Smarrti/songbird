import React from 'react';
import PropTypes from 'prop-types';

function Button({ classesForButton, nextLevel }) {
  return (
    <div className={classesForButton} onClick={nextLevel}>
      Next level
    </div>
  );
}

Button.propTypes = {
  classesForButton: PropTypes.string,
  nextLevel: PropTypes.func,
};

export default Button;
