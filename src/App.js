import React, { Component } from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import Summary from "./Summary";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Summary />
      </Provider>
    );
  }
}

export default App;
