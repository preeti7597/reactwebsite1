import React from 'react';
import Card from './Card.js';
import Sdata from './Sdata.js';

const Services = () => {
   return( 
      <>
         <div className="my-5">
            <h1 className="h1service text-center font-weight-bold ">
                  Our Services
            </h1>
         </div>
            <div className="container-fluid bg-light">
               <div className="row">
                  <div className="col-10 mx-auto">
                     <div className="row gy-4 gx-5">
   
                          {
                             Sdata.map((val, index) => {
                                return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                             })
                          }

                     </div>
                  </div>
               </div>
            </div>
      </>
   );
};

export default Services;