import React from 'react';
import './product.css';
import axios from 'axios';

function Product(props){
    
    function onDeleteClick(id){
        axios.delete(`http://localhost:8080/delete/${id}`)
            .then(() => {
                props.handleGetProducts()
            })
    }
    console.log(props)

    // function onEditClick(){
        
    // }
    return(
        <div>
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
                <div className="change_buttons">
                
                    <button >Edit</button>
                    <button onClick={() => onDeleteClick(props.id)}>Delete</button>
                
                </div>
            </div>
            
        </div>
    )
}

export default Product;