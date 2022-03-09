import React from 'react';

const Footer1 = () => {
  return (
    <section className='about-us-list' id='about-us-list'>
      <section className='row-list' id='row-list'>
        <section className='about-col-list'>
          <h1>Hire Us</h1>
          <p>Ready to start planning your next project(s)?</p>
          <a href='/Contact' className='hero-btn-list' id='hero-btn-list'>
            LET'S TALK <i class='fa fa-arrow-right' aria-hidden='true' />
          </a>
        </section>
        <section className='about-col-list'>
          <h1>Join Us</h1>
          <p>We are hiring</p>
          <a href='/Careers' className='hero-btn-list' id='hero-btn-list'>
            Apply <i class='fa fa-arrow-right' aria-hidden='true' />
          </a>
        </section>
      </section>
    </section>
  );
};

export default Footer1;
