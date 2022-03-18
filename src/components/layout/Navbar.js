import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <section className='header' id='header'>
      <nav>
        <Link to='/' className='navbar-logo'>
          Purring
        </Link>
        <section className='nav-links' id='navLinks'>
          <ul>
            <li>
              <Link to='/OurCulture'>OUR CULTURE</Link>
            </li>
            <li>
              <Link to='/About'>ABOUT</Link>
            </li>
            <li>
              <Link to='/Works'>PORTFOLIOS</Link>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='/Team'>
                TEAM{' '}
                <i
                  className='fas fa-caret-down'
                  style={{ padding: '0.5rem' }}
                />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to='/Careers'>CAREERS</Link>
            </li>
            <li>
              <Link to='/Contact'>CONTACT</Link>
            </li>
          </ul>
        </section>
      </nav>
    </section>
  );
};

export default Navbar;
