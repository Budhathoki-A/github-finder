import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ icon, title }) {
  return (
    <nav className='navbar bg-primary'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i
          className={icon}
          style={{ fontSize: '30px', marginRight: '10px' }}></i>
        <h1>{title}</h1>
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
