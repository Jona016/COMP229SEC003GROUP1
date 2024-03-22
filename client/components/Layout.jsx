import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../src/assets/Logo.jpg';

export default function Layout() {
    return (
        <>
            <nav>
                <div className='container'>
                    <Link to ="/"><img src = {Logo} alt = "Company Logo" className = "logo" width = "60px" height= "60px"/>  </Link>
                    <Link to ="/"> <p>Incident Management System</p></Link>
                   
                </div>    
            </nav>

            <footer>
                <div>
                    <p>&copy; 2024 IMS. All Rights Reserved.</p>
                </div>
            </footer>
        </>  
    );
}


