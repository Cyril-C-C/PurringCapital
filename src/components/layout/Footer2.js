import React from 'react';

const Footer2 = () => {
  return (
    <section class='footer' id='footer'>
      <section className='links'>
        <section className='footer-links' id='footerLinks'>
          <ul>
            <li>
              <a href='/'>HOME</a>
            </li>
            <li>
              <a href='/OurCulture'>OUR CULTURE</a>
            </li>
            <li>
              <a href='/About'>ABOUT</a>
            </li>
            <li>
              <a href='/Works'>PORTFOLIOS</a>
            </li>
            <li>
              <a href='/Team'>TEAM</a>
            </li>
            <li>
              <a href='/Careers'>CAREERS</a>
            </li>
            <li>
              <a href='/Contact'>CONTACT</a>
            </li>
          </ul>
        </section>
      </section>
      <section>
        <p>FOLLOW US ON:</p>
        <section className='icons'>
          {/* <a
            href='https://github.com/Purring2022'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-github' id='fa fa-github' />
          </a> */}
          <a
            href='https://www.linkedin.com/company/purringca'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-linkedin' id='fa fa-linkedin' />
          </a>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fa fa-twitter' id='fa fa-x-twitter' />
          </a>
        </section>
      </section>
      <hr />
      <span>
        <i class='fa fa-copyright' id='fa fa-copyright' />
        Copyright 2021 - 2025 Purring. All Rights Reserved.
      </span>
      <a href='/PrivatePolicy'>
        <span>Privacy Policy</span>
      </a>
    </section>
  );
};

export default Footer2;
