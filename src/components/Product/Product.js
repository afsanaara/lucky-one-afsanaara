import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img, price, brand}= props.product;
    // console.log(props);
    return (
        <div className='product'>
            <img className='image' src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Brand: {brand}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-name'>Add To Cart</p>
                
            </button>
        </div>
    );
};

export default Product;