import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {InputAdornment,OutlinedInput} from '@mui/material';

const SignupMain = () => {
    return (
        <div className='signup-main'>
            <div className="main">
                <h1>Sign up</h1>
                <form action="">
                    <div className="signup-name">
                        <OutlinedInput
                            size='small'
                            placeholder='Ruchin'
                            className=' inputfield-name'
                        />
                        <OutlinedInput
                            size='small'
                            placeholder='Shrestha'
                            className=' inputfield-name'
                        />
                    </div>
                    <OutlinedInput
                        size="small"
                        placeholder='hello@rahat.io'
                        className="inputfield"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon className='icon'/>  
                            </InputAdornment>
                        }
                    />
                    <OutlinedInput
                        size="small"
                        placeholder='****************'
                        className="inputfield"
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon />  
                            </InputAdornment>
                        }
                    />
                    <div className="password-info">
                        Your password must have:
                        <ul>
                            <li>at least 12 characters long</li>
                            <li className='red'>1 uppercase letter</li>
                            <li className='red'>1 lowercase letter</li>
                            <li>1 symbol</li>
                            <li>1 number</li>
                        </ul>
                    </div>
                    
                    <div className="submitbtn">
                        <input type="submit" value='Sign up to rahat'/>
                    </div>
                    <div className='sysqube-title'>
                        <div className="line"></div>
                        <div className="sysqube">
                                SysQube
                            </div>
                        <div className="line"></div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default SignupMain;