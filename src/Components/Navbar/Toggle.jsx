import React from 'react';
import './Toggle.css';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Toggle = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const changeMode = () => {
        theme.dispatch({ type: 'toggle' });
    }

    return (
        <div className='toggle' onClick={changeMode}>
            <Sun />
            <Moon />
            <div className="t-button"
                style={
                    colorMode ? { left: '2px' } : { right: '2px' }
                }
            >

            </div>
        </div>
    )
}

export default Toggle;