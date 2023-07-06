import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
