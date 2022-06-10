import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <div className="leftfooter">
            <div className="first">
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Help Center">Help Center</a></li>
                    <li><a href="Github">Github</a></li>
                    
                </ul>
            </div>
            <div className="second">
                <ul>
                <li><a href="a">How rahat works</a></li>
                <li><a href="b">Documentation</a></li>
                <li><a href="h">LogIn</a></li>
                <li><a href="s">SignUp</a></li>
                
                </ul>
            </div>
        </div>
        <div className="rightfooter">
            <ul>
            <li>Get in touch</li>
            <li>Kathmandu,Nepal</li>
            <li>+9770000000</li>
            <li>Copyright © 2022 SysQube <br />Lorem ipsum dolor sit amet.</li>

            </ul>
            
        </div>
    </div>

    </>
  )
}

export default Footer