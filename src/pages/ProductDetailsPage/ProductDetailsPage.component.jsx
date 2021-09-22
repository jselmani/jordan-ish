import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './ProductDetailsPage.styles.scss';
import { selectShoeById } from '../../redux/shop/shop.selectors';
import { fetchShoeByIdStart } from '../../redux/shop/shop.actions';

// // Swiper
// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// SwiperCore.use([Navigation, Pagination]);

const ProductDetailsPage = () => {
    const dispatch = useDispatch();
    const { productId }  = useParams();

    const [isPrimary, setIsPrimary] = useState(true);

    useEffect(() => {
        dispatch(fetchShoeByIdStart(productId));
    }, [dispatch, productId]);

    const shoe = useSelector(selectShoeById(productId));
    const { description, name, price, primaryImages, secondaryImages, tag, type } = shoe;

    return (
        <div className="product-details-page">
            <div className="product-info">
                <div className="product-images-container">
                    <img className="primary-image" src={primaryImages[0]} alt={name} />
                </div>
                <div className="product-details">
                    <div className="product-title">
                        <h1>{ name.toUpperCase() }</h1>
                    </div>
                    {
                        secondaryImages ?
                            <div className="product-options">
                                <div className="product-option" />
                                <div className="product-option" />
                            </div>
                            : <div />
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
