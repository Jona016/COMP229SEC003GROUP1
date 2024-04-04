import React, { useState } from 'react';
import { signin } from '../../lib/api-auth';
import auth from '../../lib/auth-helper';

const LoginForm = ({ onSignupLinkClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            const response = await signin({ email, password });

            if (!response) {
                throw new Error('Failed to login');
            }
            
            const { token } = response;


            auth.authenticate(token, () => {
                console.log('User authenticated');

            window.location.href = '/users'

            });
        } catch (error) {
            console.error('Login error:', error);
            setError('Failed to login. Please try again.'); // Set error message
        }
    };

    return (
        <div className="login-container">
            <div className="card login-form">
                <h2>Signin</h2>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit">Signin</button>
                </form>

                {error && <p className="error-message">{error}</p>}

                <p>Don't have an Account? <span onClick={onSignupLinkClick}>Sign up</span></p>
            </div>
        </div>
    );
};

export default LoginForm;