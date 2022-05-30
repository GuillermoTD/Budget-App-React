import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BudgetsProvider from "./Contexts/BudgetContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BudgetsProvider>
    <App />
  </BudgetsProvider>
);
