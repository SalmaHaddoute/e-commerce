// Breadcrum.js
import React from 'react';
import '../Breadcrums/Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    return (
    <div className='breadcrum'>
        HOME 
        <img src={arrow_icon} alt="Arrow" />
        SHOP
        <img src={arrow_icon} alt="Arrow" />
        {product?.category}
        <img src={arrow_icon} alt="Arrow" />
        {product?.name}
    </div>
);

};

export default Breadcrum;

