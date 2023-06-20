import React from 'react';
import './Service.css';
import Card from '../Card/Card';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './sample.pdf';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";

const Service = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const transition = { duration: 3, type: 'spring' }

    return (
        <div className='services' id='Service'>

            {/* Left side */}
            <div className="awsome">
                <span
                    style={
                        colorMode ? { color: 'white' } : { color: 'black' }
                    }
                >My Awsome</span>
                <span>Services</span>
                <span
                    style={
                        colorMode ? { color: 'lightgray' } : { color: 'gray' }
                    }
                >
                    I provide comprehensive services encompassing frontend, backend, and database solutions, ensuring seamless integration 
                    <br />
                    and exceptional performance for my clients ❤️.
                </span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

                {/* <div className="blur s-blur1"
                    style={{ background: "#abf1ff94" }}></div> */}
            </div>
            {/* Right side */}
            <div className="cards">
                {/* Card 1 */}
                <motion.div
                    initial={{ transform: 'rotateY(180deg)' }}
                    whileInView={{ transform: 'rotateY(0deg)' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Frontend"}
                        details={"Html5, CSS3, Javascript, JQuery, ReactJS"}
                    />
                </motion.div>
                {/* Card 2 */}
                <motion.div
                    initial={{ transform: 'rotateY(180deg)' }}
                    whileInView={{ transform: 'rotateY(0deg)' }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Backend"}
                        details={"Java, Node, AWS (Lambda, Amplify, API Gateway)"}
                    />
                </motion.div>
                {/* Card 3 */}
                <motion.div
                    initial={{ transform: 'rotateY(180deg)' }}
                    whileInView={{ transform: 'rotateY(0deg)' }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"Database"}
                        details={"MySql, Postgres, MongoDB. DynamoDB"}
                    />
                </motion.div>
                {/* <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div> */}
            </div>

        </div>
    )
}

export default Service;