import React from 'react';
import { NavLink } from 'react-router-dom';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import InfoIcon from '@material-ui/icons/Info';
import StoreIcon from '@material-ui/icons/Store';



 const Navbar = () => {
     return(
         <>
        
         <div className="container-fluid navbar1">
             <div className="row">
                 <div className="col-md-10 col-sm-12 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to=""><FastfoodIcon className="icon"/> Foodieez Corner</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">
                                <HomeIcon className="icon-li"/> Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/about">
                                <InfoIcon className="icon-li"/> About
                            </NavLink>
                        </li> 

                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">
                                <PhoneIcon className="icon-li"/> Contact
                            </NavLink>
                        </li>
                         
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" className="nav-link" to="/services">
                                <StoreIcon className="icon-li"/> Services
                            </NavLink>
                        </li>   
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
         </>
     );
 };

 export default Navbar;