import React from 'react';

const WorksContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            We Provide The Experience{' '}
            <span style={{ color: '#f44336' }}>You Deserve</span>
          </h1>
          <p>
            We diversify our investment portfolios all across conservative
            through volatile to very volatile investment opportunities in
            sustainable approach.
            <br />
            <br />
            Consistency and great timing shape how we build our vision, culture
            and portfolios. We have goals, through which we meet by best
            strategies and intelligences.
            <br />
            <br />
            Purring Capital has invested in: Technology Company.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2017.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ General
            Contracts and Technology Services.
          </p>
          <a
            href='https://www.linkedin.com/company/purringca'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Works.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default WorksContent;
