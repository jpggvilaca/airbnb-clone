import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Menu from './components/Menu';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
      </Router>
    );
  }
}
