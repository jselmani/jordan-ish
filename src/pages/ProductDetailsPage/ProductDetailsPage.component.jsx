import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import './ProductDetailsPage.styles.scss';
import ProductImageCarousel from '../../components/ProductImageCarousel/ProductImageCarousel.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton.component';
import { selectShoeById } from '../../redux/shop/shop.selectors';
import { fetchShoeByIdStart } from '../../redux/shop/shop.actions';
import { addItem } from '../../redux/cart/cart.actions';

const ProductDetailsPage = () => {
    const dispatch = useDispatch();
    const { productId }  = useParams();

    // TODO: Create HOC to use isFetching state so ProductDetailsPage is available on page refresh
    useEffect(() => {
        dispatch(fetchShoeByIdStart(productId));
    }, [dispatch, productId]);

    const [isPrimary, setIsPrimary] = useState(true);
    const [shoeSize, setShoeSize] = useState(null);

    const shoe = useSelector(selectShoeById(productId));
    const { description, name, price, primaryImages, secondaryImages, tag, gender, sizes } = shoe;

    // event handlers
    const handleSubmit = event => {
        event.preventDefault();
    }

    const handleAddToCart = () => {
        if(shoeSize) {
            const productToAdd = {
                size: shoeSize,
                specificId: isPrimary ? shoe.id[0] : shoe.id[1],
                isPrimary,
                ...shoe
            };
            dispatch(addItem(productToAdd));
            toast('Shoes successfully added to cart!');
        } else {
            toast('Select a shoe size first.');
        }
    }

    return (
        <div className="product-details-page">
            <div className="product-title">
                        <h1>{ name.toUpperCase() }</h1>
                    </div>
            <div className="product-info">
                <div className="product-images-container">
                    {
                        isPrimary ?
                        <ProductImageCarousel className="primary-image" images={primaryImages} />
                        : <ProductImageCarousel className="secondary-image" images={secondaryImages} />
                    }
                </div>
                <div className="product-details">
                <h2 className="product-details-title">PRODUCT DETAILS</h2>
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
                    <form onSubmit={handleSubmit} className="product-add-to-cart-form">
                        <div className="shoe-size-container">
                            <span className="shoe-size-title">Select Size</span>
                            <div className="shoe-size-options">
                                { 
                                    sizes.map((size, index) => {
                                        return (
                                            <div 
                                                className="shoe-size-option" 
                                                key={index} 
                                                onClick={() => setShoeSize(size)}
                                            >
                                                <CustomRadioButton 
                                                    key={index} 
                                                    size={size} 
                                                    checked={shoeSize === size} 
                                                    onChange={() => {}} 
                                                />   
                                            </div>
                                        )
                                    }) 
                                }
                            </div>
                        </div>
                        <div className="product-description">{ description }</div>
                    </form>
                    <div className="product-buttons">
                            <CustomButton onClick={handleAddToCart}>
                                <h3>ADD TO BAG</h3>
                            </CustomButton>
                            <CustomButton onClick={() => console.log('Add to favourites')} inverted>
                                <h3>ADD TO FAVOURITES</h3>
                            </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
