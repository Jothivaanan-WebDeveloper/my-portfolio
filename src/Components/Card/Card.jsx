import React from 'react';
import './Card.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Card = ({ emoji, heading, details }) => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    return (
        <div className="card"
            style={
                colorMode ? { background: '#2c2c2c', color: 'white' } : { background: 'white', color: 'black' }
            }
        >
            <img src={emoji} alt="preview" style={{marginTop: '1.5rem'}} />
            <span>{heading}</span>
            <span
                style={
                    colorMode ? { color: 'lightgray' } : { color: 'rgb(85, 81, 81)' }
                }
            >{details}
            </span>
            {/* <button className="c-button">
                More Info
            </button> */}
        </div>
    )
}

export default Card;