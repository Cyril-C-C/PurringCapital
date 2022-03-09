import React from 'react';

const AddBtn = () => {
  return (
    <section className='fixed-action-btn'>
      <a
        href='#!'
        className='btn-floating btn-large red modal-trigger'
      >
        <i className='large material-icons'>
        <i class="material-icons">more_vert</i>
        </i>
      </a>
      <ul>
        <li>
          <a
            href='#email-modal'
            className='btn-floating grey modal-trigger'
          >
            <i className='material-icons'>mail</i>
          </a>
        </li>
        <li>
          <a
            href='#phone-modal'
            className='btn-floating black modal-trigger'
          >
            <i className='material-icons'>phone</i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AddBtn;
