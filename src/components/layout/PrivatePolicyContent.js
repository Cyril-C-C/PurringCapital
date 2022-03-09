import React from 'react';

const PrivatePolicyContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            Control,{' '}
            <span style={{ color: '#f44336' }}>We Take Very Seriously</span>
          </h1>
          <p>
            It is Purring’s policy to respect your privacy regarding any
            information we may collect from you across our website and other
            sites we own and operate. Your privacy is very important to us.
            <br />
            <br />
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we are
            collecting it and how it will be used.
            <br />
            <br />
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we will
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
            <br />
            <br />
            We do not share any personally identifying information publicly or
            with third-parties, except when required to by law.
            <br />
            <br />
            Our website may link to external sites that are not operated by us.
            Please, be aware that we have no control over the content and
            practices of these sites; and cannot accept responsibility or
            liability for their respective privacy policies.
            <br />
            <br />
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
            <br />
            <br />
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>This policy is effective</span> ~
            1st January, 2021.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Legal</span> ~ This is subject to
            a formal written contract drawn up by Purring's team of solicitors.
          </p>
          <a
            href='https://www.linkedin.com/company/purring'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            KINDLY, REACH OUT
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Policy.jpg' alt='' />
          <img src='Private.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default PrivatePolicyContent;
