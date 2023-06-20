import React from 'react';
import './Experience.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Experience = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="achievements">
                <div className="circle"
                    style={
                        colorMode ? { background: '#2c2c2c', color: 'white' } : { background: 'white', color: 'black' }
                    }
                >2+</div>
                <span>Years </span>
                <span>Experience</span>
            </div>
            <div className="achievements">
                <div className="circle"
                    style={
                        colorMode ? { background: '#2c2c2c', color: 'white' } : { background: 'white', color: 'black' }
                    }
                >5+</div>
                <span>Completed </span>
                <span>Projects</span>
            </div>
            <div className="achievements">
                <div className="circle"
                    style={
                        colorMode ? { background: '#2c2c2c', color: 'white' } : { background: 'white', color: 'black' }
                    }
                >3+</div>
                <span>Clients</span>
                <span>Work</span>
            </div>
        </div>
    )
}

export default Experience;