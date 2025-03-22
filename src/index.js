import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use ReactDOM.createRoot
import App from "./App";
import "./style.css";  // ✅ Make sure this file exists inside src/

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);