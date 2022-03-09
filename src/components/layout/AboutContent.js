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
            Purring is a technology solution service provider in global market.
            With best practices, we provide bespoke technology services across
            related ecosystems.
            <br />
            <br />
            Website Development, Mobile App Development, Artificial Intelligence
            (AI) solutions, Continuous Integration (CI) and Continuous Delivery
            (CD) solutions, Intelligent Chatbots, Payment Solutions, User
            Interface (UI) and User Experience (UX) solutions are core services
            we offer to clients across businesses and NGOs world - wide.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2021.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ General
            Contracts and Technology Services.
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
