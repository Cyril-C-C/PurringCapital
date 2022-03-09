import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Floatings = () => {
    const onSubmit = () => {
        M.toast({
          html: 'Thank you for your kind interest in us. We look forward to hearing from you soon.',
        });
      };
    
      return (
        <section id='phone-modal' className='modal'>
          <section className='modal-content'>
            <h4 style={{ fontSize: '1.25rem', color: 'red'}}>Purring Phone Contact</h4>
            <p>+234(0)8117573804</p>
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

export default Floatings;
