import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/kakashi-pixel.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";

const Intro = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }
    return (
        <>
            <div className="intro">

                <div className="i-left">
                    <div className="i-name">
                        <span
                            style={
                                colorMode ? { color: 'white' } : { color: 'black' }
                            }
                        >Hii! I'm</span>
                        <span>Jothivaanan</span>
                        <span
                            style={
                                colorMode ? { color: 'lightgray' } : { color: 'gray' }
                            }
                        >
                            Frontend Developer with a good level of experience in web designing
                            and develpment,
                            producting the quality work...
                        </span>
                    </div>
                    <button className="button i-button">
                        Hire Me
                    </button>
                    <div className="i-icons">
                        <img src={Github} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>

                <div className="i-right">
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Boy} alt="" />

                    <motion.img
                        initial={{ left: '-36%' }}
                        whileInView={{ left: '-24%' }}
                        transition={transition}
                        src='' alt="" />

                    <motion.div
                        initial={{ left: '80%' }}
                        whileInView={{ left: '68%' }}
                        transition={transition}
                    // style={{ top: '-4%', left: '68%' }}
                    >
                        <FloatingDiv image={Crown} txt1={'Web'} txt2={'Developer'} />
                    </motion.div>

                    <motion.div
                        initial={{ left: '18rem' }}
                        whileInView={{ left: '0rem' }}
                        transition={transition}
                        className='dev-content'
                    // style={{ top: '18rem', left: '0rem' }}
                    >
                        <FloatingDiv image={Thumbup} txt1={'UI'} txt2={'Designer'} />
                    </motion.div>
                    {/* blur divs */}
                    {
                        !colorMode && <>
                            <div className='blur'
                                style={{ background: 'rgb(238, 210, 255)' }}>
                            </div>
                            <div className="blur"
                                style={{
                                    background: '#c1f5ff',
                                    top: '17rem',
                                    width: '21rem',
                                    height: '11rem',
                                    // left: '-9rem'
                                    left: '-10%'
                                }}>
                            </div></>
                    }
                </div >
            </div >
        </>
    )
}

export default Intro