import React from 'react';

import './HomePage.styles.scss';
import heroImage from '../../images/jordan-hero-image.jpg';

// Swiper
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// SwiperCore.use([Navigation, Pagination]);


const HomePage = () => {

    return (
        <div className="homepage">
            <div className="jumbotron-container">
                <img src={heroImage} alt="Jordan Brand" />
            </div>
            <div className="cta-text-container">
                <h1>BECOME YOUR AIRNESS</h1>
            </div>
        </div>
    )
}

export default HomePage;
