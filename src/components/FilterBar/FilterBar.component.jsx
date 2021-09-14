import React from 'react';

import './FilterBar.styles.scss';

const FilterBar = () => {
    return (
        <div className='filterbar'>
            <ul className='filterbar-list'>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>PRICE</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$100-$150'/>
                            <label for='price'>$100-$150</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$150-$200'/>
                            <label for='price'>$150-$200</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='price' value='$200+'/>
                            <label for='price'>$200+</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>GENDER</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='gender' value='men'/>
                            <label for='gender'>Men</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='gender' value='women'/>
                            <label for='gender'>Women</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>TECHNOLOGY</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Max Air'/>
                            <label for='technology'>Nike Max Air</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Zoom Air'/>
                            <label for='technology'>Nike Zoom Air</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike React'/>
                            <label for='technology'>Nike React</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Lunarlon'/>
                            <label for='technology'>Nike Lunarlon</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='technology' value='Nike Air'/>
                            <label for='technology'>Nike Air</label>
                        </li>
                    </ul>
                </li>
                <li className='filterbar-row'>
                    <span className='filterbar-row-title'>STYLE</span>
                    <ul className='filterbar-row-options'>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='SNKRS'/>
                            <label for='style'>SNKRS</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='basketball'/>
                            <label for='style'>Basketball</label>
                        </li>
                        <li className='filterbar-row-option'>
                            <input className='filterbar-row-checkbox' type='checkbox' name='style' value='air-jordan-1'/>
                            <label for='style'>Air Jordan 1</label>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default FilterBar;
