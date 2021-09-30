import React from 'react';
import { NavLink } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import LinkIcon from '@material-ui/icons/Link';
import HomeIcon from '@material-ui/icons/Home';

const Footer = () => {
    return(
        <>
          
<footer className="text-center text-muted">
 
<div className="text-center pt-3" >
<span className="font-weight-bold text-dark">© Copyright 2021 Foodieez Corner. All rights reserved.</span>
    
</div>
 
  <section className="">
    <div className="container text-center text-md-start mt-4">     
      <div className="row ">            
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  mb-4">        
          <h6 className="text-uppercase font-weight-bold mb-4">
          <CallIcon/> Contacts
          </h6>
          <p><i className=""></i> +91 987 654 987</p>
         <p><i className=""></i> + 91 908 987 567</p>
       
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
         
          <h6 className="text-uppercase font-weight-bold mb-4">
          <LinkIcon/> Usefull links
          </h6>
          <p>
            <NavLink to="" className="text-reset">Pricing</NavLink>
          </p>
          <p>
            <NavLink to="" className="text-reset">Settings</NavLink>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase font-weight-bold  mb-4">
          <HomeIcon /> Address
          </h6>
          <p><i className="fas fa-home "></i> DEHRADUN, UK, INDIA</p>
          <p>
            <i className="fas fa-envelope"></i>
            Foodieez@example.com
          </p>
        </div>
       
      </div>

     
    </div>
  </section>
 
 
 
</footer>

        </>
    );
};
export default Footer;