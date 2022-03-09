import React from 'react';

const LaptopVideo = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            You Have The Vision;{' '}
            <span style={{ color: '#f44336' }}>
              We Have The People And Technology
            </span>
          </h1>
          <p>
            What about offshoring and nearshoring? Why pay US rates when you can
            get the same work done offshore for a quarter of the cost?
            <br />
            <br />
            If you have a project or if you are budget sensitive, Purring
            developers could be a good option.
            <br />
            <br />
            And if you are in search of the right company, where you can achieve
            excellent results for a fraction of what you would pay a Big
            Business or Enterprise Class software development and consultancy
            company, Purring is the right place for you.
            <br />
            <br />
            To your exciting realities...
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Our Focus</span> ~
            Diversity-Inclusion-Belonging (DIB) and Equity.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>End - Goal</span> ~ Freedom.
          </p>
          <a
            href='https://www.linkedin.com/company/purring/'
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
