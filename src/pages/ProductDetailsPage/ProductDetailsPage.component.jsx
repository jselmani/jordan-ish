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
    const { description, name, price, primaryImages, secondaryImages, tag, gender, sizes } = shoe;

    return (
        <div className="product-details-page">
            <div className="product-title">
                        <h1>{ name.toUpperCase() }</h1>
                    </div>
            <div className="product-info">
                <div className="product-images-container">
                    {
                        // TODO: Create Carousel reusable component using SwiperJS 
                        isPrimary ?
                        <img className="primary-image" src={primaryImages[0]} alt={name} />
                        : <img className="secondary-image" src={secondaryImages[0]} alt={name} />
                    }
                </div>
                <div className="product-details">
                    {
                        secondaryImages ?
                            <div className="product-options">
                                <div 
                                    className="product-option" 
                                    onClick={() => setIsPrimary(true)}
                                >
                                    <img className={isPrimary ? "selected" : ""} src={primaryImages[0]} alt="Option 1" />
                                </div>    
                                <div 
                                    className="product-option" 
                                    onClick={() => setIsPrimary(false)}
                                >
                                    <img className={isPrimary ? "" : "selected"} src={secondaryImages[0]} alt="Option 2" />
                                </div>
                            </div>
                            : null
                    }
                    <span className="product-price .product-gender">${ price } | { gender.toUpperCase() }</span>
                    <span className="product-tag">{ tag.toUpperCase() }</span>
                    <div className="shoe-size-container">
                        <span className="shoe-size-title">Select Size</span>
                        <span className="shoe-size-options">
                            {
                                // TODO: Create reusable radio button component to handle size selection
                            }
                        </span>
                    </div>
                    <div className="product-buttons">

                    </div>
                    <div className="product-description">{ description }</div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
