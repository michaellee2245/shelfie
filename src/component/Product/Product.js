import React from 'react';
import './product.css';


function Product(props){
    return(
        <div className="product_container">
            <div 
            style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}
            className="product_img"></div>
            <div className="product_labels">
                <label>{props.name}</label>
                <label>{`$ ${props.price}`}</label>
            </div>
        </div>
    )
}

export default Product;