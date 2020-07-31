import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from '../HeaderMenu/HeaderMenu.jsx';

function Header({ headerLinks }) {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Songbird</h1>
        <span>Score: 0</span>
      </div>
      <HeaderMenu headerLinks={headerLinks} />
    </header>
  );
}

Header.propTypes = {
  headerLinks: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
