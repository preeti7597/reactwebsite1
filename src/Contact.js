import React from 'react';
import { useState } from 'react';

const Contact = () => {
   const[data,setData] = useState(
      {
         fullname:"",
         phone:"",
         email:"",
         message:"",
      }
   );

   const inputEvent = (event) => {
      const { name, value} = event.target;
     
      setData((preval) => {
         return {...preval, [name]: value,};
      });
   };
   const formSubmit = (e) => {
      e.preventDefault();
      alert(
         `My name is ${data.fullname}. My mobile no. is ${data.phone}. and email is ${data.email}. and here is what i wanna say ${data.message}` 
      );
   };
   return( 
      <>
      <div className="my-5">
         <h1 className="text-center">Contact-Us</h1>
      </div>

      <div className="container contact_div">
         <div className="row">
            <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={formSubmit} className="py-5 px-5 mb-5">

                  <div className="mb-2">
                     <label htmlFor="Fullname" className="form-label">
                        Fullname
                     </label>
                     <input type="text" 
                           className="form-control" 
                           name="fullname"
                           value={data.fullname}
                           onChange={inputEvent}
                           placeholder="Enter Fullname"/>
                  </div>

                  <div className="mb-2">
                     <label htmlFor="Phone" className="form-label">
                        Phone
                     </label>
                     <input type="number" 
                           className="form-control" 
                           name="phone"
                           value={data.phone}
                           onChange={inputEvent}
                           placeholder="Enter Mobile no."/>
                  </div>

                  <div className="mb-2">
                     <label htmlFor="email" className="form-label">
                        Email address
                     </label>
                     <input type="text" 
                            className="form-control" 
                            name="email"
                            value={data.email}
                            onChange={inputEvent}
                            placeholder="Enter Email Address"/>
                  </div>

                  <div className="mb-2">
                     <label htmlFor="Message" className="form-label">
                        Message
                     </label>
                     <textarea className="form-control" 
                              name="message"
                              value={data.message}
                              onChange={inputEvent}
                              rows="3"
                              placeholder="Enter Message">
                     </textarea>
                  </div>

                  <div className="col-12">
                     <button className="btn btn-outline-primary font-weight-bold  mx-auto" type="submit">Submit </button>
                  </div>
               </form>
            </div> 
         </div>
      </div> 
      </>
   );
};

export default Contact;