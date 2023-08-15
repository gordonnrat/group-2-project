// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        if (email && username && password) {
            const userSignUpInfo = {
                email,
                username,
                password
            };
            localStorage.setItem('userSignUpInfo', JSON.stringify(userSignUpInfo))
            console.log(userSignUpInfo);

            alert('Registration successful');
            navigate('/login');
        } else {
            alert('Please provide valid information');
        }
    };

    return (
        <div className='signup-page'>
            <div className="signup-container">
                <div className='signup-box'>
                    <h2>Sign Up to Soundex</h2>
                    <hr />
                    <p>What’s your email?</p>
                    <input
                        type="email"
                        placeholder="Enter your email."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <p>Create a password?</p>
                    <input
                        type="password"
                        placeholder="Create a password."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <p>What should we call you?</p>
                    <input
                        type="text"
                        placeholder="Enter a username."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <button className='get-started button-hover signup-button' onClick={handleSignUp}>Sign Up</button>
                    <button className="signup-link" onClick={() => navigate('/login')}>Already have an account?</button>
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

export default SignUp;