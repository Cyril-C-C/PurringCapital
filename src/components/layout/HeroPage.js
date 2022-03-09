import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Outstanding Investment{' '}
          <span style={{ color: '#f44336' }}>Intelligence and Strategy</span>
        </h1>
        <p>
          We are committed in leading financial freedom to
          exciting realities.
        </p>
        <Link to='/About' className='hero-btn' id='hero-btn'>
          Visit Us To Know More
        </Link>
      </section>
    </Fragment>
  );
};

export default HeroPage;
