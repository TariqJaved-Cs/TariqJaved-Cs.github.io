import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import index from "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDom.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,

  document.getElementById("root")
);
