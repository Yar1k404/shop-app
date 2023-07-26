import React from "react";
import instagram from '../../img/icons/instagram.svg'
import twitter from '../../img/icons/twitter.svg'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-icons">
                <img src={twitter} alt="twitter-icon" className='icon'/>
                <img src={instagram} alt="instagram-icon" className='icon'/>
            </div>
            ©{new Date().getFullYear()} House Staff.com
        </footer>
    )
}

export default Footer