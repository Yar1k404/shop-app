import {useState} from "react";
import './MobileNav.css'

function MobileNav() {
    const [open, setOpen] = useState(false)

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
                <li className={'mobile-li'}>KORZINA</li>
                <li className={'mobile-li'}>About us</li>
                <li className={'mobile-li'}>Contacts</li>
                <li className={'mobile-li'}>Account</li>
            </ul>
        </div>)}
    </div>)
}

export default MobileNav