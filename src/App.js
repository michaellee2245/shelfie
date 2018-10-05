import React, { Component } from 'react';

import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
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
