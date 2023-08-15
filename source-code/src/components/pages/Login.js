// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const userSignUpInfo = JSON.parse(localStorage.getItem('userSignUpInfo'));
        console.log(userSignUpInfo);
        if (userSignUpInfo) {
            console.log(userSignUpInfo.email);
            console.log(userSignUpInfo.password);
            if (email === userSignUpInfo.email && password === userSignUpInfo.password) {
                navigate('/home');
            } else {
                alert('Invalid credentials');
            }
        } else {
            alert('No sign-up data found. Please sign up first.');
        }
    };

    return (
        <div className="login-page">
            <div className='login-container'>
                <div className='login-box'>
                    <h2 className="login-heading">Log In to Soundex</h2>
                    <hr />
                    <p>What’s your email?</p>
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Enter your email."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>What’s your password?</p>
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter your password."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="get-started button-hover signup-button" onClick={handleLogin}>Login</button>
                    <button className="signup-link" onClick={() => navigate('/signup')}>Don’t have an account?</button>
                </div>
            </div>

            <style>{`
            .now-playing-hide{
              display:none;
            }
            `}
            </style>
        </div>
    );
};

export default Login;