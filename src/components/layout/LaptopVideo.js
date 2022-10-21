import React from 'react';

const LaptopVideo = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            Our Vision;{' '}
            <span style={{ color: '#f44336' }}>Mission And Goals</span>
          </h1>
          <p>
            Our vision is to play roles and become one of key and successful
            investment companies.
            <br />
            <br />
            Our Mission is to set remarkable trails as we contribute to our
            partners, other companies and governmental institutions.
            <br />
            <br />
            Our goals are met through elements of consistency, patience, skills
            and great timing.
            <br />
            <br />
            To your exciting realities...
            <i class='fa fa-trademark' id='fa fa-trademark' />
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Our Focus</span> ~
            Diversity-Inclusion-Belonging (DIB) and Equity.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>End - Goal</span> ~ Freedom to
            all our Esteemed Customers first.
          </p>
          <a
            href='https://www.linkedin.com/company/purringca/'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            LINKEDIN PROFILE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Laptop.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default LaptopVideo;
