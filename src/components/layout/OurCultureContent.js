import React from 'react';

const OurCultureContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            Passion, Self - Love, Authenticity, Team - Work{' '}
            <span style={{ color: '#f44336' }}>and Leadership</span>
          </h1>
          <p>
            Our Control Integrity Management System (CIMS) and Operational
            Integrity Management System (OIMS) are all centered on Safety and
            Sustainability.
            <br />
            <br />
            Your Investment of Personality, Intellectual Property and Works will
            always speak volume towards your career success with us; hence,
            everything else counts really less. Just add that value, and go back
            to family at every COB.
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
          <img src='OurCulture.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default OurCultureContent;
