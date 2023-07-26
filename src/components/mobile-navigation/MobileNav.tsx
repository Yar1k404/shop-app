import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './MobileNav.css'

function MobileNav() {
    const [open, setOpen] = useState<boolean>(false)

    window.addEventListener('click', () => {
        if (open) {
            setOpen(false)
        }
    })

    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'

    return (<div className={`mobile-nav ${open ? 'open' : ''}`} onClick={(e) => {
        setOpen(!open)
        e.stopPropagation()
    }}>
        <span></span>
        <span></span>
        <span></span>
        {open && (<div className={'mobile-list'} onClick={(e) => e.stopPropagation()}>
            <ul className={'mobile-ul'}>
                <li className={'mobile-li'}>
                    <NavLink to='/cart' className='mobile-link' onClick={() => setOpen(false)}>
                        Cart
                    </NavLink>
                </li>
                <li className={'mobile-li'}>
                    <NavLink to='/aboutUs' className='mobile-link' onClick={() => setOpen(false)}>
                        About us
                    </NavLink>
                </li>
                <li className={'mobile-li'}>
                    <NavLink to='/contacts' className='mobile-link' onClick={() => setOpen(false)}>
                        Contacts
                    </NavLink>
                </li>
                <li className={'mobile-li'}>
                    <NavLink to='/account' className='mobile-link' onClick={() => setOpen(false)}>
                        Account
                    </NavLink>
                </li>
            </ul>
        </div>)}
    </div>)
}

export default MobileNav