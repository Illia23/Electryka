
import './index.css'
import App from './Components/App/App';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
