import React from 'react';
import ContactBanner from './ContactBanner';
import ContactInfo from './ContactInfo';


function Contact_Us(){
    return(
        <div>
            <div>
            <ContactBanner />
            </div>
            <div className="contactTitle">
                Contact Details
            </div>
            <div className="contact">
            <ContactInfo />
            </div>
        </div>
        
    )
}
export default Contact_Us
