import React from 'react';
import './Contact.css';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const [showText, setShowText] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowText(true);

        setTimeout(() => {
            setShowText(false);
        }, 4000)
    }

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awsome">
                    <span
                        style={
                            colorMode ? { color: 'white' } : { color: 'black' }
                        }
                    >Get in touch</span>
                    <span>Leave a message</span>
                    {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
                    </div> */}
                </div>
            </div>
            <div className="c-right">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name='user_name' className='user' placeholder='Fullname' required />
                    <input type="email" name='user_email' className='user' placeholder='Email' required />
                    <textarea name='message' className='user' placeholder='Message' required />
                    <input type='submit' value='Send' className='button' />
                    {/* <div
                        className='blur c-blur1'
                        style={{ background: "var(--purple)" }}
                    >
                    </div> */}
                    <span className={`hide-show ${showText ? 'show' : ''}`}
                    style={{color: 'var(--orange)'}}
                    >
                        Email has been sent! Thanks for contacting me ❤️
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Contact;