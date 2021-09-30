import React from 'react';
import toast from 'react-hot-toast';

import './Toasts.styles.scss';
import jordanLogo from '../../images/jordan-logo-black.png';
import CustomButton from '../CustomButton/CustomButton.component';

export const SuccessToast = (shoe, t) => (
    <div className="success-toast">
        <div className="success-toast-header">
            <img src={jordanLogo} alt="jordan-logo" />
            <h3>PRODUCT ADDED TO BAG</h3>
        </div>
        <div className="success-toast-content">
            <div className="success-toast-image">
            {
                shoe.isPrimary ?
                <img src={shoe.primaryImages[0]} alt={shoe.name} />
                : <img src={shoe.secondaryImages[0]} alt={shoe.name} />
            }
            </div>
            <div className="success-toast-details">
                <span className="success-toast-title">{shoe.name}</span>
                <span className="success-toast-price success-toast-gender">${shoe.price} | {shoe.gender}</span>
                <span className="success-toast-tag">{shoe.tag}</span>
                <span className="success-toast-size">SIZE: {shoe.size}</span>
            </div>
        </div>
        <CustomButton 
            style={{width: '100%' }}
            onClick={() => toast.dismiss(t.id)}
        >
            <h4>DISMISS</h4>
        </CustomButton>
    </div>
);

export const ErrorToast = (t) => (
    <div className="error-toast">
        <div className="error-toast-content">
            <img src={jordanLogo} alt="jordan-logo" />
            <h3>SELECT A SHOE SIZE</h3>
            <img src={jordanLogo} alt="jordan-logo" />
        </div>
        <CustomButton 
            style={{ width: '100%' }}
            onClick={() => toast.dismiss(t.id)}
        >
            <h4>DISMISS</h4>
        </CustomButton>
    </div>
);