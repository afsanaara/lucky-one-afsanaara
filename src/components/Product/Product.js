import React from 'react';

const Product = (product) => {
    const {name,price,img,brand}= product;
    console.log(product);
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Brand: {brand}</p>
            </div>
        </div>
    );
};

export default Product;