import React from 'react';

function Contact(props) {
    return (
        <div className="contact">
            <div className="avatar">
                <div className="bg-avatar">
                    A
                </div>
            </div>
            <div>
                {props.contact.fullname}
            </div>
        </div>
    );
}

export default Contact;