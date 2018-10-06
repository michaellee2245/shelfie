import React, { Component } from 'react';

import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

class App extends Component {

//   state = {
//     products: []
// }

// componentDidMount(){
//     this.getProducts()
// }

// getProducts = () => {
//     axios.get(`http://localhost:8080/products`)
//     .then((response) => {
//         console.log(response)
//         this.setState({products: response.data});
//     })
//     .catch(error => console.error('error', error));
// }

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard_form_container">
          <Dashboard />
          <Form />
        </div>

      </div>
    );
  }
}

export default App;
