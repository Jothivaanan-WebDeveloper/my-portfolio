import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Tindercat from '../../img/tindercats.png';
import MemoryBook from '../../img/MemoryBook.png';
import Timesheet from '../../img/Timesheet.png';
import AssetManagement from '../../img/AssetManagement.png';
import MovieSearch from '../../img/MovieSearch.png';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const colorMode = theme.state.darkMode;
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 480) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize(); // Call the function initially

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="portfolio" id='Portfolio'>
            <span
                style={
                    colorMode ? { color: "white" } : { color: "black" }
                }
            >Recent Projects</span>
            <span>Portfolios</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={slidesPerView}
                grabCursor={true}
                className='portfolio-slider'
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <h1 style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Tinder Cats</h1>
                    <a href="https://master.dtphj19qjf7pi.amplifyapp.com/"><img src={Tindercat} alt="Tindercats" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Employee Timesheet Portal</h1>
                    <img src={Timesheet} alt="Sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Movie Search Engine</h1>
                    <a href="https://moviesearchengine-ab548.web.app/"><img src={MovieSearch} alt="MovieSearch" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Asset Management Dashboard</h1>
                    <img src={AssetManagement} alt="Sidebar" />
                </SwiperSlide>
                <SwiperSlide>
                    <h1 style={{ color: 'var(--orange)', fontWeight: 'bold' }}>Memory Book</h1>
                    <img src={MemoryBook} alt="Sidebar" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;