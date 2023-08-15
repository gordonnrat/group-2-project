// SignUp.js 
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import '../SignUp.css'; 

const SignUp = () => { 
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [dateOfBirth, setDateOfBirth] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 

    const handleSignUp = () => { 
// Simulate registration logic for demonstration 
// You can replace this with your actual registration process 
    if (firstName && lastName && email && dateOfBirth && username && password) { alert('Registration successful'); 
    navigate('/login'); 
    } else { 
    alert('Please provide valid information');
    } 
    }; 
    return ( 
        <div className='signup-page'> 
            <h2>Sign Up</h2> 
            <input 
                type="text" 
                placeholder="First Name" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} /> 
            <input 
                type="text" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} /> 
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} /> 
            <input 
                type="date" 
                placeholder="Date of Birth" 
                value={dateOfBirth} 
                onChange={(e) => setDateOfBirth(e.target.value)} /> 
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} /> 
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button> 

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