import React, { Component } from 'react';
import axios from 'axios';
import Product from './../Product/Product';
import './dashboard.css';

class Dashboard extends Component {
    
    state = {
        products: []
    }
    
    componentDidMount(){
        axios.get(`http://localhost:8080/products`)
        .then((response) => {
            console.log(response)
            this.setState({products: response.data});
        })
        .catch(error => console.error('error', error));
    }

    render() {
        return(
            <div className="dashboard_container">
                <div className="products_wrapper">
                    {this.state.products.map((product) => {
                        return <Product key={product.id} name={product.product_name} price={product.price} img={product.img_url} /> 
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard;