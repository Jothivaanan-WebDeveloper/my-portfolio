import React from 'react';
import './Works.css';
import CET from '../../img/cet.png';
import Gupshup from '../../img/gupshup.png';
import Nipurna from '../../img/nipurna.png';
import Emudhra from '../../img/emudhrapng.png';
import Tentamus from '../../img/TentamusGroup.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import handleEmailClick from '../EmailUtils/EmailUtils';

const Works = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const transition = { duration: 4, type: 'spring' };

    const companyNames = [
        {
            title: CET,
            width: 220
        },
        {
            title: Gupshup,
            width: 220
        },
        {
            title: Nipurna,
            width: 'auto'
        },
        {
            title: Emudhra,
            width: 260
        },
        {
            title: Tentamus,
            width: 260
        }
    ]

    return (
        <div className="works">
            {/* Left side */}
            <div className="awsome">
                <>
                    <span
                        style={
                            colorMode ? { color: 'white' } : { color: 'black' }
                        }
                    >Worked for All these</span>
                    <span>Brands & Clients</span>
                    {/* <span
                        style={
                            colorMode ? { color: 'lightgray', visibility: 'none' } : { color: 'gray', visibility: 'none' }
                        }
                    >
                        Client satisfaction is the cornerstone of my work, and I take pride in consistently exceeding expectations. From startups to established businesses,
                        <br /> my clients have consistently expressed their utmost satisfaction with the quality, professionalism, and results delivered.
                    </span> */}

                    <button className="button w-button"
                        onClick={handleEmailClick}
                    >Hire Me
                    </button>
                </>

                {/* <div className="blur s-blur1"
                    style={{ background: "#abf1ff94" }}></div> */}
            </div>
            {/* Right side */}
            <div className="w-right">

                <motion.div
                    initial={{ rotate: 80 }}
                    whileInView={{ rotate: 0 }}
                    transition={transition}
                    className="w-mainCircle"
                    style={
                        colorMode ? { background: "#2c2c2c", color: "white" } : { background: "white", color: "black" }
                    }
                >
                    {
                        companyNames.map((el) => (
                            <div className="w-secCircle">
                                <img src={el.title} alt={el.title} width={el.width} />
                            </div>
                        ))
                    }

                </motion.div>
                {/* Background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works;