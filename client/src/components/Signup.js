import React, { useState } from 'react';
import signup from "../images/signup.svg";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",    email: "",    phone: "",    work: "",    password: "",    cpassword: ""
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
  
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      }),
    });
  
    const data = await res.json();
  
    if (res.status === 422 || res.status === 400 || res.status === 500) {
      // Handle the specific status codes here
      if (res.status === 400) {
        window.alert("Password Does Not Match");
        console.log("Registration Error");
      } else {
        window.alert(`Registration Error: ${data.error}`);
      }
    } else {
      // Display a success message
      window.alert("Registration Successful.");
      console.log("Registration Successful.");
      navigate('/signin');
    }
    
   
  };
  

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <section className='signup'>
          <div className='container mt-5'>
        <div className="signup-content d-flex">
          <div className="signup-form">
            <h2 className='form-title'>Sign Up</h2>
            <form className='register-form' method='POST'>
              <div className="form-group">
                <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name">  Name</i>
                </label>
                <input type="text" name='name' autoComplete='off'  value={user.name} onChange={handleInputs} placeholder='Your Name' required/>
              </div>
              <div className="form-group">
                <label htmlFor="Email">
                <i className="zmdi zmdi-email material-icons-name">  Enter Your Email</i>
                </label>
                <input type="text" name='email' autoComplete='off'  value={user.email} onChange={handleInputs} placeholder='Enter Your Email' required/>
              </div>
              <div className="form-group">
                <label htmlFor="Work">
                <i className="zmdi zmdi-case material-icons-name">  Work</i>
                </label>
                <input type="text" name='work' autoComplete='off'  value={user.work} onChange={handleInputs} placeholder='Your Proffation' required/>
              </div>
              <div className="form-group">
                <label htmlFor="Phone Number">
                <i className="zmdi zmdi-smartphone material-icons-name">  Phone Number</i>
                </label>
                <input type="text" name='phone' autoComplete='off'  value={user.phone} onChange={handleInputs} placeholder='Your Phone Number' required/>
              </div>
              <div className="form-group">
                <label htmlFor="Password">
                <i className="zmdi zmdi-lock-outline material-icons-name">  Password</i>
                </label>
                <input type="password" name='password' autoComplete='off'  value={user.password} onChange={handleInputs} placeholder='Enter Your Password' required/>
              </div>
              <div className="form-group">
                <label htmlFor="Confirm Password">
                <i className="zmdi zmdi-lock-outline material-icons-name">  Confirm Password</i>
                </label>
                <input type="password" name='cpassword' autoComplete='off'  value={user.cpassword} onChange={handleInputs} placeholder='Enter Your Confirm Password' required/>
              </div>
              <div className="form-group form-button">
                <input type="submit" name='submit' className='form-submit' value="Register" onClick={PostData} />
              </div>
            </form>
          </div>
          <div className='signup-image'>
                <figure>
                  <img src={signup} alt="logo" />
                  <NavLink className="nav-link" to="/signin">Login</NavLink>
                </figure>
              </div>
        </div>
      </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Signup;
