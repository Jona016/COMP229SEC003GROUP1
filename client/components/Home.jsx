import React, { useState } from 'react';
import LoginForm from '../pages/user/Login';
import SignupForm from '../pages/user/Signup';
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

export default Home;
