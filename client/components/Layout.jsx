import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../src/assets/Logo.jpg';
import Background from '../src/assets/Background.png';


export default function Layout() {
    return (
        <>
        <div>
            <nav>
                <div className='container'>
                    <Link to ="/"><img src = {Logo} alt = "Company Logo" className = "logo" width = "60px" height= "60px"/>  </Link>
                    <Link to ="/"> <p>Incident Management System</p></Link>
                    {/* <button className='signin'>Sign In</button> */}
                </div>    
            </nav>
        </div>
        </>  
    );
}
