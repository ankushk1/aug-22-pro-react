import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MainRouter from "./Router/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainRouter/>);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
