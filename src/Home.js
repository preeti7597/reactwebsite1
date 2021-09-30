import React from 'react';
import food from "../src/image/fo.png";
import Common from './Common';

const Home = () => {
   return( 
      <>
         <Common h1="Grow your Business with"
                  h2="Hello!! Welcome to Home page" 
                  imgsrc={food} 
                  visit="/services" 
                  btname="Get Started"/>
      </>
   );
};

export default Home;