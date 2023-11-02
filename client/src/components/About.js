import React, { useEffect, useState } from 'react';
import profile from '../images/profile.svg'
import another from '../images/another.svg'
import {useNavigate} from 'react-router-dom';

const About = () => {

  const [userdata,setUserdata]=useState({});

const navigate=useNavigate();


  const callAboutPage=async()=>{
      try{
          const res=await fetch('/about',{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          });

          const data=await res.json();
          console.log(data);
          setUserdata(data);

          if(res.status!==200){
            const err=new Error(res.err);
            throw err;
          }

      }catch(e){
        console.log(e);
        navigate('/signin');
      }
  }



  useEffect(()=>{
    callAboutPage();
  },[]);



  return (
    <div className="container emp-profile">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img"><img src={userdata.name==="AYUSH PATHAK"?profile:another} alt="profilepic"  className='imagee'/></div>            
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{userdata.name}</h5>
              <h6>{userdata.work}</h6>
              <p className="profile-rating mt-3 mb-5">
                Ranking : <span>1/1000</span>
              </p>
              <ul className="nav nav-tabs" role='tablist'>
                <li className='nav-item'>
                  <a className='nav-link active' id="home-tab" data-toggle="tab" href="#about" role='tab'>About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' id='profile-tab' data-toggle="tab" href="#timeline" role='tab'>Timeline</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" name='btnAdd' value='Edit Profile' id="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>Work Links</p>
              <a href="https://youtu.be/OlA10XKktew?si=5Q2tMgsJxAe0TBhn" target='_blank'>YouTube</a><br />
              <a href="https://youtu.be/OlA10XKktew?si=5Q2tMgsJxAe0TBhn" target='_blank'>YouTube</a><br />
              <a href="https://youtu.be/OlA10XKktew?si=5Q2tMgsJxAe0TBhn" target='_blank'>YouTube</a><br />
              <a href="https://youtu.be/OlA10XKktew?si=5Q2tMgsJxAe0TBhn" target='_blank'>YouTube</a><br />
            </div>
          </div>
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab">
              <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby='home-tab'>                
                <div className="row mt-4">
                        <div className="col-md-6">
                          <label> User ID</label>
                        </div>
                        <div className="col-md-6">
                          <p> {userdata._id}</p>
                        </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Name</label>
                        </div>
                        <div className="col-md-6">
                          <p> {userdata.name}</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userdata.email}</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p> {userdata.phone}</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p> {userdata.work}</p>
                        </div>
                      </div>
                      </div>              
                {/* Add more profile details here */}
              </div>
              <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby='profile-tab'>
              <div className="row mt-4">
                        <div className="col-md-6">
                          <label> User ID</label>
                        </div>
                        <div className="col-md-6">
                          <p> 1543268</p>
                        </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Name</label>
                        </div>
                        <div className="col-md-6">
                          <p> AYUSH PATHAK</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>ayushpathak@gmail.com</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p> +91 111 123 4523</p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label> Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p> Full Stack Developer</p>
                        </div>
                      </div>
                      </div>  
                {/* Add timeline content here */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
