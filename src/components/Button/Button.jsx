import React from 'react';
import PropTypes from 'prop-types';

function Button({ activeButton }) {
  return (
    <div className={activeButton === true ? 'button' : 'button button_not-active'}>
      Next level
    </div>
  );
}

Button.propTypes = {
  activeButton: PropTypes.bool,
};

export default Button;
