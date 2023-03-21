import React from 'react'
import "./newUser.css"

function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder='Anna' />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder='Anna Becker' />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder='Anna@gmail.com' />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 564 564 89' />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder='Dubai | SKY'/>
            </div>
            <div className="newUserItem">
                <label>Gender</label>

                <div className="newUserGender">
                <input type="radio" name='gender' id='male' value="male"/>
                <label for="male">Male</label>
                <input type="radio" name='gender' id='female' value="female"/>
                <label for="female">Female</label>
                <input type="radio" name='gender' id='other' value="other"/>
                <label for="other">Other</label>
                </div>
                <button className='newUserButn'>Create</button>
            </div>

          <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
        </form>
    </div>
  )
}

export default NewUser