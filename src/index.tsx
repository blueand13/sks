import ReactDOM from "react-dom/client";
import App from "./App";
import "@shopify/polaris/build/esm/styles.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { navmenu } from "./components/navmenu_component";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {navmenu()}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
