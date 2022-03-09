import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Floating = () => {
  const onSubmit = () => {
    M.toast({
      html: 'Thank you for your kind interest in us. We look forward to hearing from you soon.',
    });
  };

  return (
    <section id='email-modal' className='modal'>
      <section className='modal-content'>
        <h4 style={{ fontSize: '1.25rem', color: 'red'}}>Purring Email Address</h4>
        <p>purring.co@gmail.com</p>
      </section>
      <section className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect red waves-light btn'
        >
          OK
        </a>
      </section>
    </section>
  );
};

export default Floating;
