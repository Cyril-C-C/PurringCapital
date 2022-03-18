import React from 'react';

const AboutContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            To Your Exciting{' '}
            <span style={{ color: '#f44336' }}>Realities...</span>
          </h1>
          <p>
            Purring Capital is a financial and investment company. It is
            committed to proffering incredible and sustainable values to its
            clients and communities.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2017.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ General
            Contracts.
          </p>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='About.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default AboutContent;
