import React from 'react';
import './signin.css'
import { FaFacebook } from 'react-icons/fa';
import {InputAdornment,OutlinedInput} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const SigninMain = () => {
    return (
        <div className='signin-main'>
            <div className="main">
                <h1>Sign in</h1>
                <form action="">
                    <OutlinedInput
                        size="small"
                        placeholder='User name'
                        className="inputfield"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon className='icon'/>  
                            </InputAdornment>
                        }
                    />
                    <OutlinedInput
                        size="small"
                        placeholder='Password'
                        className="inputfield"
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon />  
                            </InputAdornment>
                        }
                    />
                    
                    <div className="submitbtn">
                        <a href="ashhakjs">Forget your password?</a>
                        <input type="submit" value='Sign in to rahat'/>
                    </div>
                    <div className='connect-with-title'>
                        <div className="line"></div>
                        <div className="connect-with">
                                or connect with
                            </div>
                        <div className="line"></div>
                    </div>
                    <div className='connect-option'>
                        <div className='connect-main'>
                            <FcGoogle className='google logo'/>
                            Google
                        </div>
                        <div className='connect-main'>
                            <FaFacebook className='facebook logo'/>
                            Facebook
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SigninMain;