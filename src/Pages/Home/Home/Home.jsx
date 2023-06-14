import React, { useEffect, useState } from 'react';

import Banner from '../Banner/Banner';
import IcnBanner from '../IcnBanner/IcnBanner';


const Home = () => {
 

  return (
    <section className=" bg-[--bgs-b]">
      <div className='pt-20px'>
        <Banner></Banner>
        <IcnBanner></IcnBanner>
  
      </div>
    </section>

  );
};

export default Home;