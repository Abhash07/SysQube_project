import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css'

const SignupNav = () => {
    return (
        <div className='nav-bar'>
            <div className="nav-logo">
            <img src="./sysQube.png" alt="logo" />
                <h3>SysQube Technology</h3>
            </div>
            <div className="nav-link">
                <h3>Already have an account?{' '}
                    <Link to="/signin">Sign in</Link>
                </h3>
            </div>
            
        </div>
    );
}
export default SignupNav;