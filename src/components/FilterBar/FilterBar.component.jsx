import React from 'react';
import { useSelector } from 'react-redux';

import './FilterBar.styles.scss';
import { selectIsFilterBarHidden } from '../../redux/shop/shop.selectors';

const FilterBar = () => {
    const isFilterHidden = useSelector(selectIsFilterBarHidden);
    
    return (
        <div className={isFilterHidden ? 'filterbar' : 'filterbar active'}>
            <ul className='filterbar-list'>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>PRICE</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$100-$150'/>
                            <label htmlFor='price'>$100-$150</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$150-$200'/>
                            <label htmlFor='price'>$150-$200</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$200+'/>
                            <label htmlFor='price'>$200+</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>GENDER</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='gender' value='men'/>
                            <label htmlFor='gender'>Men</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='gender' value='women'/>
                            <label htmlFor='gender'>Women</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>TECHNOLOGY</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Max Air'/>
                            <label htmlFor='technology'>Nike Max Air</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Zoom Air'/>
                            <label htmlFor='technology'>Nike Zoom Air</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike React'/>
                            <label htmlFor='technology'>Nike React</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Lunarlon'/>
                            <label htmlFor='technology'>Nike Lunarlon</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Air'/>
                            <label htmlFor='technology'>Nike Air</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>STYLE</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='SNKRS'/>
                            <label htmlFor='style'>SNKRS</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='basketball'/>
                            <label htmlFor='style'>Basketball</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='air-jordan-1'/>
                            <label htmlFor='style'>Air Jordan 1</label>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default FilterBar;
