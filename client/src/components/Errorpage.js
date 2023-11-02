import React from 'react'
import { NavLink } from 'react-router-dom'
import error from "../images/error.svg";


const Errorpage = () => {
  return (
    <>
    <div id="notfound">
        <div className="notfound">
            <div className='notfound-404'>
                <img src={error} alt="404" />
            </div>
            <h2>We Are Sorry, Page Not Found!</h2>
            <p className="mb-5">THE PAGE YOU'RE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNVAILABLE</p>
            <button className="back-to-homepage-button"><NavLink to="/">Back To Homepage</NavLink></button>

        </div>        
    </div>
    </>
  )
}

export default Errorpage