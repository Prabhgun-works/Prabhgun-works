import React, { useState } from "react"
import './Login.css'


import user_icon from '/Users/prabhgun/Desktop/my-app/src/components/assests/Assets/person.png'
import email_icon from '/Users/prabhgun/Desktop/my-app/src/components/assests/Assets/email.png'
import password_icon from './assests/Assets/password.png'


const Login =() =>{

    const [action,setAction] = useState("login");
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
        
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="User Name" id="" />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email" id="" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" id="" />
            </div> 
            <div className="Forgot-Password">Forgot Password?
             <br></br><span>Click Here!</span></div>
    
        </div> 
        </div>
        </div>
    )
}
export default Login 