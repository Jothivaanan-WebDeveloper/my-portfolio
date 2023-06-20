import React, { useContext } from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../Context';

const FloatingDiv = ({ image, txt1, txt2 }) => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const floatingDiv = "floatingDiv "+txt1;
    return (
        <div className={floatingDiv}
            style={
                colorMode ? { background: '#2c2c2c' } : { color: 'white' }
            }
        >
            <img src={image} alt="" />
            <span
                style={
                    colorMode ? { color: 'white' } : { color: 'black' }
                }
            >
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv;