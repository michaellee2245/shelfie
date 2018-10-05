import React, { Component } from 'react';
import './product.css';


function Product(){
    return(
        <div className="product_container">
            <div className="product_img"></div>
            <div className="product_labels">
                <label>Product Name</label>
                <label>Price</label>
            </div>
        </div>
    )
}

export default Product;