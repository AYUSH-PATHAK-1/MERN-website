import React, { useEffect, useState } from 'react';


const Contact = () => {

  const [userdata,setUserdata]=useState({name:"",email:"",phone:"",message:""});


  
  
    const userContact=async()=>{
        try{
            const res=await fetch('/getdata',{
              method:"GET",
              headers:{                
                "Content-Type":"application/json"
              },             
            });
  
            const data=await res.json();
            console.log(data);
            setUserdata({...userdata,name:data.name,email:data.email,phone:data.phone});
  
            if(res.status!==200){
              const err=new Error(res.err);
              throw err;
            }
  
        }catch(e){
          console.log(e);       
        }
    } 
  
    useEffect(()=>{
      userContact();
    },[]);


    const handleInputs=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setUserdata({...userdata,[name]:value});
    }


    const contactForm=async (e)=>{
      e.preventDefault(); 

      const{name,email,phone,message}=userdata;

      const res=await fetch('/contact',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,message
        })
      });

      const data=await res.json();

      if(!data){
        console.log("message not send");
      }else if(res.status===401){
        alert("Please fill all The Field");
        setUserdata({...userdata,message:""});
      }else{ alert("Message Send");
      setUserdata({...userdata,message:""});}



    }


  return (
   <>
   <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">   
    <div className="contact_info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            <div className="contact_info_item justify-content-start align-item-center d-flex">
              <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" className='image' />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Phone
                  </div>
                  <div className="contact_info_text">
                    +91 111 123 4561
                  </div>
                </div>                
            </div>
            <div className="contact_info_item justify-content-start align-item-center d-flex">
              <img src="https://img.icons8.com/tiny-color/24/new-post.png" alt="phone" className='image' />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Email
                  </div>
                  <div className="contact_info_text">
                    ayushpathak@gmail.com
                  </div>
                </div>                
            </div>
            <div className="contact_info_item justify-content-start align-item-center d-flex">
              <img src="https://img.icons8.com/doodle/24/home--v1.png" alt="phone" className='image' />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Address
                  </div>
                  <div className="contact_info_text">
                    Ahmedabad,GJ,India
                  </div>
                </div>                
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="contact_form yooo mt-5">
      <div className="container">
        <div className='row'>
              <div className="col-lg-10 offset-lg-1">
                  <div className="contact_form_container py-5">
                    <div className="contact_form_title">
                      Get In Touch
                    </div>
                  <form method="POST" className='contactt_form mt-4'>
                        <div className="contact_form_name d-flex justify-content-between align-item-between">
                                <input type="text" className='contact_form_name' placeholder='Your Name' value={userdata.name} name='name' onChange={handleInputs} required />
                                <input type="email" className='contact_form_email' placeholder='Your Email' value={userdata.email} name='email' onChange={handleInputs} required />
                                <input type="number" className='contact_form_number' placeholder='Your Number' value={userdata.phone} name='phone' onChange={handleInputs} required />
                        </div>
                        <div className="contact_form_text mt-5">
                          <textarea className="text_field contact_form_message w-100" placeholder='Message' value={userdata.message} name='message' onChange={handleInputs} cols="30" rows="10"></textarea>
                        </div>
                        <div className="contact_form_button">
                          <button type='submit' className='button contact_submit_button' onClick={contactForm}>Send Message</button>
                        </div>
                  </form>
                  </div>
              </div>
        </div>
      </div>
    </div></div></div></div>
    
   </>
  )
}

export default Contact