import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
   return( 
      <>
         <section id="header" className=" d-flex align-items-center">
         <div className="container-fluid">
            <div className="row">
               <div className="col-10 mx-auto">

                  <div className="row">
                     <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 className="heading1"> {props.h1}
                           <strong className="brand-name"> Foodieez</strong></h1>
                        <h5 className="heading2 my-2">{props.h2}</h5>
                        <div className="mt-3">
                           <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                        </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img mt-3" >
                        <img src={props.imgsrc} className="img-fluid-animated" alt="Aboutimg"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </section>
      </>
   );
};

export default Common;