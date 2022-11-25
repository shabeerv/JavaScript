import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

import reducer from "./reducers/Reducer";
import {createStore} from 'redux';
const initialState = { 
  tech: "React"
}
const store = createStore(reducer, initialState)

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech}/>
  }
}

export default App;