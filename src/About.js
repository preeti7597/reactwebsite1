import React from 'react';
import food from "../src/image/pl.png";
import Common from './Common';

const About = () => {
   return( 
      <>
       <Common h1="Welcome to About page of "
               h2="You are now on About page"
               imgsrc={food} 
               visit="/contact" 
               btname="Contact now"/>
      </>
   );
};

export default About;