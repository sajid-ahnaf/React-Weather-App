// Importing the StrictMode component from the React library
import { StrictMode } from "react";

// Importing the ReactDOM module from the React library
import ReactDOM from "react-dom";

// Importing the main App component from "./App" file
import App from "./App";

// Getting the root element from the HTML where the React app will be rendered
const rootElement = document.getElementById("root");

// Rendering the main App component within a StrictMode wrapper
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
