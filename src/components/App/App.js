import React, { Component } from 'react';
import { Provider } from 'react-redux';
import List from "../List/List";
import store from '../../store';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
