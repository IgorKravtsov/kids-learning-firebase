import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/firebase.config";

import App from "./components/app/App";
import { store } from "storage/store";

ReactDOM.render(
  <Router>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ThemeProvider> */}
  </Router>,
  document.getElementById("root")
);
