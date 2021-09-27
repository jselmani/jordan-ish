import React, { useState } from 'react';

import './ProductImageCarousel.styles.scss';

// Swiper
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Navigation, Thumbs]);

const ProductImageCarousel = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product-image-carousel">
            <Swiper
                className="large-product-images"
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                loop={true}
            >
                {
                    images.map((image, index) => {
                       return <SwiperSlide key={index}><img className="large-product-image" src={image} alt="product" /></SwiperSlide>
                    })
                }
            </Swiper>
            <Swiper
                className="thumb-product-images"
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
            >
                {
                    images.map((image, index) => {
                       return <SwiperSlide key={index}><img className="thumb-product-image" src={image} alt="product" /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );

};

export default ProductImageCarousel;
