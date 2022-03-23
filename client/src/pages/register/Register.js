import React from 'react'
import "./Register.css"

const Register = () => {
    return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Massade-Trips</h3>
                <span className="loginDesc">
                    Find interesting Points Near Massade
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className='loginInput' />
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input placeholder='Password Again' className='loginInput' />
                    <input type="button" value="SignUp" className="loginButton" />
                    <input type="button" value="Log into Account" className="loginRegisterButton" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register