import React from 'react';

import './HomePage.styles.scss';

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
                <img src="https://air.jordan.com/wp-content/uploads/2019/09/HeroImage-D-3.jpg" alt="Jordan Brand" />
            </div>
            <div className="cta-text-container">
                <h1>BECOME YOUR AIRNESS</h1>
            </div>
        </div>
    )
}

export default HomePage;
