import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSub = () => {
  return (
    <section className='sub-header' id='sub-header'>
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
              <Link to='/Works'>WORKS</Link>
            </li>
            <li>
              <Link to='/Team'>TEAM</Link>
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

export default NavBarSub;
