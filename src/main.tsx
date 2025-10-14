import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Dynamically set basename based on environment
const basename = import.meta.env.MODE === 'docker' ? '/' : '/Gurekam-Portfolio';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);