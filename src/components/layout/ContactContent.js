import React from 'react';

const ContactContent = () => {
  return (
    <section className='contact-us' id='contact-us'>
      <section className='row' id='row'>
        <section className='contact-col' id='contact-col'>
          <section>
            <i className='fa fa-home' id='fa fa-home'></i>
            <span>
              <h5>GRA Road, 123 Building</h5>
              <p>Lagos, Ikeja, GRA</p>
            </span>
          </section>
          <section>
            <i className='fa fa-phone' id='fa fa-phone'></i>
            <span>
              <h5>+234(0)8117573804</h5>
              <p>Monday to Friday, 8am to 4pm</p>
            </span>
          </section>
          <section>
            <i className='fa fa-envelope-o' id='fa fa-envelope-o'></i>
            <span>
              <h5>purring.co@gmail.com</h5>
              <p>Email us for more information</p>
            </span>
          </section>
        </section>
        <section className='contact-col' id='contact-col'>
          {/* <form action='form-handler.php' method='post'></form> */}
        </section>
      </section>
    </section>
  );
};

export default ContactContent;
