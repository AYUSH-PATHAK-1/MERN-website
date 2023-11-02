import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link"  to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/about" >About</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link"  to="/contact">Contact</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link"  to="/signin">Login</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink className="nav-link"  to="/signup">Sign Up</NavLink> {/* Corrected capitalization */}
            </li>   
            <li className="nav-item">
              <NavLink className="nav-link"  to="/logout">Logout</NavLink> {/* Corrected capitalization */}
            </li>   
          </ul>       
        </div>
      </nav>
      </div>
        </div>
      </div>           
         
    </>
  );
}

export default Navbar;
