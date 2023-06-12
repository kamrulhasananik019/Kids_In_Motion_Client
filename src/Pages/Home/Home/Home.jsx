import React, { useEffect, useState } from 'react';

import Banner from '../Banner/Banner';
import IcnBanner from '../IcnBanner/IcnBanner';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
 

  return (
    <section className="  bg-white dark:bg-black">
      <div className='pt-20px'>
        <Banner></Banner>
        <IcnBanner></IcnBanner>
        <Footer></Footer>
      </div>
    </section>

  );
};

export default Home;