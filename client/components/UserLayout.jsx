import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../src/assets/Logo.jpg';


export default function UserLayout() {
    return (
        <>
        <div>
            <nav>
                <div className='userLayout_container'>
                    <Link to ="/"><img src = {Logo} alt = "Company Logo" className = "logo" width = "60px" height= "60px"/>  </Link>
                    <Link to ="/users"> <p>Users</p></Link>
                    {/* <button className='signin'>Sign In</button> */}
                </div>    
            </nav>
        </div>
        </>  
    );
}
