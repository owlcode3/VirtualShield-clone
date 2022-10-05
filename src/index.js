require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
