    import React, { useState } from 'react';

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
            
            try {
                const response = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
        
                if (!response.ok) {
                    throw new Error('Failed to login');
                }
        
                const data = await response.json();
                const { token } = data;
        

                auth.authenticate(token, () => {
                    console.log('User authenticated');
                                
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
