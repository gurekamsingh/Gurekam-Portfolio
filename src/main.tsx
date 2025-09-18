import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ import this
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/Gurekam-Portfolio">
    <App />
  </BrowserRouter>
);
