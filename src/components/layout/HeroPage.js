import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Bespoke Tech Solutions{' '}
          <span style={{ color: '#f44336' }}>and Consulting</span>
        </h1>
        <p>
          We are one of the best brands that brings your digital dreams to
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
