import React, { Component } from 'react';
import './form.css';

class Form extends Component {

    state = {
        imageUrl: '',
        productName: '',
        price: 0
    }

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    onAddInventoryClick = (input) => {

    }

    onCancelClick = (input) => {
        this.setState({ imageUrl: '', productName: '', price: 0})
    }
    render() {
        // console.log(this.state.imageUrl);
        // console.log(this.state.productName);
        // console.log(this.state.price);
        return(
            <div className="main_container">
                <div className="form_container">
                    <div className="img_container"></div>
                    <label>Image Url:</label>
                    <input placeholder="Image Url" name="imageUrl" value = {this.state.imageUrl} onChange={this.onInputChange} />
                    <label>Product Name:</label>
                    <input placeholder="Product Name" name="productName" value = {this.state.productName} onChange={this.onInputChange} />
                    <label>Price:</label>
                    <input placeholder="Price" name="price" value={this.state.price} onChange={this.onInputChange} />
                    <div>
                        <button onClick={this.onCancelClick}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Form;