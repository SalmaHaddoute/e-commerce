import React from 'react'
import '../Pages/css/loginsingup.css'

const LoginSingup = () => {
    return (
        <div className='loginsingup'>
        <div className="loginsingup-container">
            <h1>Sing UP</h1>
            <div className="loginsingup-fields">
                <input type="text" placeholder='your name' />
                <input type="email" placeholder='Email Address'  />
                <input type="password" placeholder='Password' />
            </div>
            <button>Continue</button>
            <p className="loginsingup-login">Already have an account <span>Login</span>login here</p>
        <div className="loginsingup-agree">
            <input type="checkbox" name="" id="" />
            <p>by continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        </div>
        
        </div>
    )
    }

export default LoginSingup
