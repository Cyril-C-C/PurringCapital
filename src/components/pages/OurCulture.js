import React from 'react';
import NavBarSub from '../layout/NavBarSub';
import SubCulture from '../layout/SubCulture';
import OurCultureContent from '../layout/OurCultureContent';
import OurPeople from '../layout/OurPeople';

const OurCulture = () => {
  return (
    <>
      <NavBarSub />
      <section>
        {/* SubCulture */}
        <SubCulture />
        {/* Content */}
        <OurCultureContent />
        {/* Our People, Our Culture */}
        <OurPeople />
      </section>
    </>
  );
};

export default OurCulture;
