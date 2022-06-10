import React from 'react';
import './signin.css';
import { Link } from 'react-router-dom';

const SigninNav = () => {
    return (
        <div className='nav-bar'>
            <div className="nav-logo">
                <img src="./sysQube.png" alt="logo" />
                <h3>SysQube Technology</h3>
            </div>
            <div className="nav-link">
                <h3>Don't have an account?{' '}
                    <Link to="/signup">Sign up</Link>
                </h3>
            </div>
            
        </div>
    );
}

export default SigninNav;