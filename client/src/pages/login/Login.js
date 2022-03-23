import React from 'react'
import './Login.css'

const Login = () => {
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
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <input type="button" value="Log In" className="loginButton" />
                    <span className="loginForgot">Forgot Password?</span>
                    <input type="button" value="Create a New Account" className="loginRegisterButton" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login