import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Menu from './components/Menu';
import MainContent from './components/MainContent';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Menu />
          <MainContent />
        </Fragment>
      </Router>
    );
  }
}
