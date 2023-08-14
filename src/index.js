import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { moviesStore } from "./redux/store/moviesStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={moviesStore}>
    <App />
  </Provider>
);
