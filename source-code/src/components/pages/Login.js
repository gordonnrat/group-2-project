// Login.js 
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import '../Login.css'; 

const Login = () => { 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 
    const handleLogin = () => { 
    // Simulate authentication logic for demonstration 
    if (email === 'user@gmail.com' && password === 'password') { 
        navigate('/home'); 
       } else { 
        alert('Invalid credentials'); 
        } 
        }; 
    return ( 
        <div className="login-container"> 
            <h2 className="login-heading">Log In to Soundex</h2> 
            <input 
                className="login-input" 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            /> 
            <input 
                className="login-input" 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                /> 
            <button className="login-button" onClick={handleLogin}>Login</button> <p className="signup-link"> <button onClick={() => navigate('/signup')}>Don’t have an account?</button></p> 
        
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
