// import React from 'react';
// import { createRoot } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { App } from './App';
// import "./styles/bootstrap.min.css";
// const root = createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
/*
ReactDOM.render(
  <BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById("root")
);
*/
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import "./styles/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
