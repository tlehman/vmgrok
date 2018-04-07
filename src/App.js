import React, { Component } from 'react';
import './App.css';
import NavTop from './NavTop';
import JVMContainer from './containers/jvmContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavTop />
          <JVMContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
