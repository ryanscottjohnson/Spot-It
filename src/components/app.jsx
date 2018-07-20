import React from 'react';
import {Provider} from 'react-redux';
// import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';

import reducers from '../reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import Dashboard from './dashboard.jsx';
// import CardClicker from './CardClicker.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
        {/* <CardClicker /> */}
      </Provider>
    )
  }
}

export default App;