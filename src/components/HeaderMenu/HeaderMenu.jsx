import React from 'react';
import PropTypes from 'prop-types';

function HeaderMenu({ headerLinks }) {
  return (
    <ul className="header__menu">
      {headerLinks.map((link) => (
        <li key={link.name} className={link.classNames}>
          {link.name}
        </li>
      ))}
    </ul>
  );
}

HeaderMenu.propTypes = {
  headerLinks: PropTypes.arrayOf(PropTypes.object),
};

export default HeaderMenu;
