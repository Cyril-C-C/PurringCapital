import React from 'react';
import NavBarSub from '../layout/NavBarSub';
import SubContact from '../layout/SubContact';
import Email from '../layout/Email';
// import ContactMap from '../layout/ContactMap';
import ContactContent from '../layout/ContactContent';

const Contact = () => {
  return (
    <>
      <NavBarSub />
      <SubContact />
      <Email/>
      {/* <ContactMap /> */}
      <ContactContent />
    </>
  );
};

export default Contact;
