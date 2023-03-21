import React from 'react'
import "./Topbar.css"
import {GrNotification,GrLanguage,GrSettingsOption} from "react-icons/gr"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className="logo">kiran admin</span>
            </div>
            <div className='topright'>
                <div className="topbarIconContainer">
               <GrNotification/>   
               <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
               <GrLanguage/>   
               <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
               <GrSettingsOption/>   
                </div>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/308636418_901100061333266_5069292235740515044_n.jpg?ccb=11-4&oh=01_AdRAiQRQe8aPbsikaw4xUA0FnDPp1wJVZs7ettISapJAkg&oe=63DF5B5F" alt="" className="topAvatar" />
            </div>
        </div>
        
    </div>
  )
}

export default Topbar