import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Facebook from '../../img/Facebook.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";

const Works = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const transition = { duration: 4, type: 'spring' }

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
                    <span
                    style={
                        colorMode ? { color: 'lightgray', visibility: 'none' } : { color: 'gray', visibility: 'none' }
                    }
                >
                    Client satisfaction is the cornerstone of my work, and I take pride in consistently exceeding expectations. From startups to established businesses, 
                    <br /> my clients have consistently expressed their utmost satisfaction with the quality, professionalism, and results delivered.
                </span>

                    <button className="button s-button">Hire Me</button>
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
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork" />
                    </div>

                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Fiverr" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Amazon" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Shopify" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Facebook" />
                    </div>
                </motion.div>
                {/* Background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works;