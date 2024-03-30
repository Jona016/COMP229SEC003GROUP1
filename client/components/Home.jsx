import React, { useState } from 'react';
import '../src/index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle,
    },
    media: {
        minHeight: 400,
    },
}));

const Home = () => {
    const classes = useStyles();
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleReportButtonClick = () => {
        setShowLoginForm(true);
        setShowSignupForm(false);
    };

    const handleSignupLinkClick = () => {
        setShowLoginForm(false);
        setShowSignupForm(true);
    };

    const handleSigninLinkClick = () => {
        setShowLoginForm(true);
        setShowSignupForm(false);
    };

    return (
        <>
            <div className='home'>
                <div className="welcome-container">
                    {!showLoginForm && !showSignupForm ? (
                        <div className="welcome-description">
                            <h1>Resolve your IT issues with us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim
                                nulla aliquet porttitor. Neque sodales ut etiam sit amet.</p>
                            <div className="button-container">
                                <button className="report-button" onClick={handleReportButtonClick}>Report Now</button>
                            </div>
                        </div>
                    ) : showLoginForm ? (
                        <LoginForm onSignupLinkClick={handleSignupLinkClick} />
                    ) : (
                        <SignupForm onSigninLinkClick={handleSigninLinkClick} />
                    )}
                </div>
            </div>
        </>
    );
};

const LoginForm = ({ onSignupLinkClick }) => {
    return (
        <div className="login-container">
            <div className="card login-form">
                <h2>Signin</h2>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>

                <button type="submit">Sigin</button>

                <p>Don't have an Account? <span onClick={onSignupLinkClick}>Sign up</span></p>
            </div>
        </div>
    );
};

const SignupForm = ({ onSigninLinkClick }) => {
    return (
        <div className="signup-container">
            <div className="card signup-form">
                <h2>Sign up</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="firstName" id="firstName" name="firstName" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="lastName" id="lastName" name="lastName" placeholder="Enter your last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>

                <button type="submit">Sign up</button>
                <p>Already have an Account? <span onClick={onSigninLinkClick}>Sign in</span></p>
            </div>
        </div>
    );
};


export default Home;
