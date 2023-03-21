
import React from 'react'
import "./user.css"
import {MdPermIdentity,MdCalendarToday,MdOutlineEmail,MdMyLocation,MdPublish} from 'react-icons/md'
import {FaMobileAlt} from "react-icons/fa"
import { Link } from "react-router-dom"

function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButn">Create</button>
        </Link>
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Akshara Birla</span>
                    <span className="userShowUserTitle">Civil Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <MdPermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">akshubirla99</span>
                </div>
                <div className="userShowInfo">
                <MdCalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <FaMobileAlt className='userShowIcon'/>
                <span className="userShowInfoTitle">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                <MdOutlineEmail className='userShowIcon'/>
                <span className="userShowInfoTitle">akshubirla99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <MdMyLocation className='userShowIcon'/>
                <span className="userShowInfoTitle">New York | USA</span>
                </div>

            </div>

        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <lable>Username</lable>
                        <input type="text" placeholder='akshubirla99' className='userUpdateInpute'/>
                    </div>
                    <div className="userUpdateItem">
                        <lable>FullName</lable>
                        <input type="text" placeholder='Akshara Birla' className='userUpdateInpute'/>
                    </div>
                    <div className="userUpdateItem">
                        <lable>Email</lable>
                        <input type="text" placeholder='akshubirla99@gmail.com' className='userUpdateInpute'/>
                    </div>
                    <div className="userUpdateItem">
                        <lable>Phone</lable>
                        <input type="text" placeholder='+1 123 456 67' className='userUpdateInpute'/>
                    </div>
                    <div className="userUpdateItem">
                        <lable>Address</lable>
                        <input type="text" placeholder='New York | USA' className='userUpdateInpute'/>
                    </div>

                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className='userUpdateImg' src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
                        <label htmlFor="file"><MdPublish className='userUpdateIcon'/></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className='userUpdateButn'>Update</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default User