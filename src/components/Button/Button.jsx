import React from 'react';
import PropTypes from 'prop-types';

function Button({ classesForButton }) {
  return (
    <div className={classesForButton}>
      Next level
    </div>
  );
}

Button.propTypes = {
  classesForButton: PropTypes.string,
};

export default Button;
