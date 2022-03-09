import React from 'react';

const ContactMap = () => {
  return (
    <section className='location'>
      <iframe
        title='ContactMap'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63416.569565366364!2d3.3153069593755027!3d6.580137081693901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9210951dba3d%3A0xc3d4b92e003891c!2sIkeja%20GRA%20101233%2C%20Ikeja!5e0!3m2!1sen!2sng!4v1628507358286!5m2!1sen!2sng'
        style={{ width: '100%', height: '100%', border: '0' }}
        allowfullscreen=''
        loading='lazy'
      ></iframe>
    </section>
  );
};

export default ContactMap;
