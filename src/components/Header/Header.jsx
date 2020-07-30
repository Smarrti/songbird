import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';

function Header({ headerLinks }) {
  return (
    <header>
      <div>
        <h1>Songbird</h1>
        <span>Score: 0</span>
      </div>
      <HeaderMenu headerLinks={headerLinks} />
    </header>
  );
}

HeaderMenu.propTypes = {
  headerLinks: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
