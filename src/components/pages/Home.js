import React from 'react';
import Navbar from '../layout/Navbar';
import HeroPage from '../layout/HeroPage';
import Services from '../layout/Services';
import OurPeople from '../layout/OurPeople';
import LaptopVideo from '../layout/LaptopVideo';
import Email from '../layout/Email';

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* HeroPage */}
        <HeroPage />

        {/* Services */}
        <Services />

        {/* Our People, Our Culture */}
        <OurPeople />
        <LaptopVideo />
        <Email />
      </section>
    </>
  );
};

export default Home;
