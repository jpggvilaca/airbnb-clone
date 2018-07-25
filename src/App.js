import React, { Component, Fragment } from 'react';

// Redux
import { Provider } from "react-redux";
import store from './store';

// React Router
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from 'react-router-redux';

// Components
import Menu from './components/Menu';
import MainContent from './components/MainContent';

// Styles
import './index.css';

const history = createHistory();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Menu />
            <MainContent />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}
