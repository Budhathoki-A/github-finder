import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ icon, title }) {
  return (
    <nav className='navbar bg-primary'>
      <i className={icon} style={{ fontSize: '30px', padding: '10px' }}></i>
      <h1>{title}</h1>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
