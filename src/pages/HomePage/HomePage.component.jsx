import React from 'react';

import './HomePage.styles.scss';

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination]);


const HomePage = () => {

    const slides = [];
    for(let i = 0; i < 3; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={`https://picsum.photos/id/${i+1}/500/300`} alt="pic"/>
            </SwiperSlide>
        );
    }

    return (
        <div className="homepage">
            <div className="nav-swiper">
                <Swiper navigation={true} loop={true} pagination={{"clickable": true}}>
                    { slides }
                </Swiper>
            </div>
        </div>
    )
}

export default HomePage;
