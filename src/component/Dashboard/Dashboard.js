import React, { Component } from 'react';

import Product from './../Product/Product';
import './dashboard.css';

class Dashboard extends Component {
    
    render() {
        return(
            <div className="dashboard_container">
                
                <div>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}

export default Dashboard;