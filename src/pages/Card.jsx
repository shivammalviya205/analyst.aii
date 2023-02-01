import React, { useState } from 'react'
import './Card.css' 
const Card = ({userdata}) => {
     const [show,setshow]=useState(false);
      function toggle(){
         setshow((prev)=>!prev)
      }
     
  return (
    <div className='container'>
    <div className='main-Card'>
        <div className="item">Hello {userdata.username}</div>
        <div className="item"><p><b>Name</b></p><p>{userdata.name}</p></div>
        <div className="item"><p><b>Street</b></p><p>{userdata.address.street}</p></div>
        <div className="item"><p><b> City </b></p><p>{userdata.address.city}</p></div>
        <div className="item"><button className='button' onClick={toggle}>{show?"Hide" :'show'}</button></div>
    </div>
    <div className={`bottom ${show ? "" : "hide"}`}>
        <h3>
            Description 
        </h3>
        <p>Hii,{userdata.username}. Your Registered Name is {userdata.name}. Your complete address is {userdata.address.street},{userdata.address.city}</p>
         <div className="bottom-item">
            <div className="colomn">
            <div className="item left"><p><b>Contacts</b></p><p>{userdata.name} </p></div>
        <div className="item left"><p><b>Phone No:</b></p><p>{userdata.phone}</p></div>
        <div className="item left"><p><b>City</b></p><p>{userdata.address.city} </p></div>
            </div>
            <div className="colomn">
            <div className="item left"><p><b>Email</b></p><p>{userdata.email}</p></div>
        <div className="item left"><p><b>Website</b></p><p>{userdata.website}</p></div>
        <div className="item left"><p><b>Company Name</b></p><p>{userdata.company.name} </p></div>
            </div>
         </div>
    </div>
    </div>

  )
}

export default Card