import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// For GitHub Pages, we don't need to set basename since we're using the root
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Gurekam-Portfolio">
    <App />
  </BrowserRouter>
);
