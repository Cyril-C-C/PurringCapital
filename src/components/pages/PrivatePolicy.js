import React from 'react';
import NavBarSub from '../layout/NavBarSub';
import SubPrivatePolicy from '../layout/SubPrivatePolicy';
import PrivatePolicyContent from '../layout/PrivatePolicyContent';
import OurPeople from '../layout/OurPeople';

const PrivatePolicy = () => {
  return (
    <>
      <NavBarSub />
      <SubPrivatePolicy />
      <PrivatePolicyContent/>
      <OurPeople />
    </>
  );
};

export default PrivatePolicy;
