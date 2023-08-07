import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import Link and useHistory
import Navbar from '../Navbar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Create a history object

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        console.log('Logging in with:', username, password);

        // Redirect to the home page after successful login
        history.push('/home');
    };

    return (
        <div>
            <Navbar />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                {/* ... Input fields and button */}
            </form>
        </div>
    );
}

export default Login;
