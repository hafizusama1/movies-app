import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { MoviesDataProvider } from "./contexts/MoviesContext";
import { GenreDataProvider } from "./contexts/GenresContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GenreDataProvider>
      <MoviesDataProvider>
        <App />
      </MoviesDataProvider>
    </GenreDataProvider>
  </React.StrictMode>
);
