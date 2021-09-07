import React from 'react';

// Swiper
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// SwiperCore.use([Navigation, Pagination]);

import './HomePage.styles.scss';

import Directory from '../../components/Directory/Directory.component';
import Jumbotron from '../../components/Jumbotron/Jumbotron.component';


const HomePage = () => {

    return (
        <div className="homepage">
            <Jumbotron />
            <div className="cta-text-container">
                <h1>BECOME YOUR AIRNESS</h1>
            </div>
            <Directory />
        </div>
    )
};

export default HomePage;
