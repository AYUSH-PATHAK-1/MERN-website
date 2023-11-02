import React, { useState } from 'react'
import signin from '../images/signin.svg';
import { NavLink,useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate=useNavigate();

   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

 const loginUser=async(e)=>{
    e.preventDefault();
    const res=await fetch('/signin',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        email,password
    })
    });

    const data=await res.json();


    if(res.status===400 || !data){
      window.alert("Invalid Credentials");
    }else{
      window.alert("Login Successfull");
      navigate('/');
    }
 
  };

  return (
   <>
   <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
   <section className='signin'>
      <div className='container mt-5'>
        <div className="signin-content d-flex">
        <div className='signin-image'>
                <figure>
                  <img src={signin} alt="logo" />
                  <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                </figure>
              </div>
          <div className="signin-form yo">
            <h2 className='form-titlee'>Sign In</h2>
            <form className='register-form' method="POST">              
              <div className="form-group yoo">
                <label htmlFor="Email">
                <i className="zmdi zmdi-email material-icons-name"> Enter Your Email</i>
                </label>
                <input type="text" name='email' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Your Email' />
              </div>                   
              <div className="form-group yoo">
                <label htmlFor="Password">
                <i className="zmdi zmdi-lock-outline material-icons-name"> Enter Your Password</i>
                </label>
                <input type="password" name='password' autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password' />
              </div>             
              <div className="form-group  form-button yoo">
                <input type="submit" name='submit' className='form-submit' value="Login" onClick={loginUser} />
              </div>
            </form>
          </div>          
        </div>
      </div>

    </section>
    </div>
        </div>
      </div> 
   </>
  )
}

export default Signin