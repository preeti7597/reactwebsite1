import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';
import Services from './Services.js';
import Navbar from './Navbar.js';
import Footer from './Footer';
import { Switch, Route , Redirect } from 'react-router-dom';

const App = () => {
   return( 
      <>
         <Navbar/>
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/contact" component={Contact}/>
               <Route exact path="/services" component={Services}/>
               <Redirect to="/"/>
            </Switch> 
            <Footer/>  
      </>
   );
};

export default App;