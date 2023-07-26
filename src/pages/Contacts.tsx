import React from "react";

function Contacts() {
    return (
        <div className='pages-wrapper'>
            <h1>Contacts</h1>
            <div className="contacts-wrapper">
                <div className="contacts-content">
                    <div className="location">
                        <h2 className='contacts-title'>Location</h2>
                        Vinnitsa, Ukraine
                    </div>
                    <div className="phone">
                        <h2 className='contacts-title'>Phone</h2>
                        +380 ххх ххх ххх
                    </div>
                    <div className="email">
                        <h2 className='contacts-title'>Email</h2>
                        <a href="mailto:support@mail.com" className='mail-link'>support@mail.com</a>
                    </div>
                </div>
                <iframe className='google-maps'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10297.064120401166!2d28.4112411931751!3d49.23402694689658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17c1b2d283e51f9e!2sVinnytsia%20National%20Technical%20University!5e0!3m2!1sen!2sua!4v1658786948249!5m2!1sen!2sua">
                </iframe>
            </div>
        </div>
    )
}

export default Contacts