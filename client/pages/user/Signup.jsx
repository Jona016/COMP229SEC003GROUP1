
import React, { useState } from 'react';

const SignupForm = ({ onSigninLinkClick }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup submission
        console.log('Signup submitted');
    };

    return (
        <div className="signup-container">
            <div className="card signup-form">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="firstName" 
                            id="firstName" 
                            name="firstName" 
                            placeholder="Enter your first name" 
                            value={firstName}
                            onChange={handleFirstNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="lastName" 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Enter your last name" 
                            value={lastName}
                            onChange={handleLastNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email address" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>

                    <button type="submit">Sign up</button>
                </form>

                <p>Already have an Account? <span onClick={onSigninLinkClick}>Sign in</span></p>
            </div>
        </div>
    );
};

export default SignupForm;
