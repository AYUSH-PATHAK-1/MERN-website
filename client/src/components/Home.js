import React, { useEffect, useState } from 'react';


const Home = () => {

  const [username,setUsername]=useState('');

  const userHome=async()=>{
    try{
        const res=await fetch('/getdata',{
          method:"GET",
          headers:{                
            "Content-Type":"application/json"
          },             
        });

        const data=await res.json();
        console.log(data);
        setUsername(data.name);       

    }catch(e){
      console.log(e);       
    }
} 

useEffect(()=>{
  userHome();
},[]);

  return (
<>

<div className="home-page">
  <div className="home-div">
    <p className='pt-5'>WELCOME</p>
    <h1>{username}</h1>
    <h2>We Are The MERN Developer</h2>
  </div>
</div>
</>
  )
}

export default Home