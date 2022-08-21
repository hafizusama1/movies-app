import React from "react";

import moviesData from "../data/moviesData.json";

const CreateMoviesDataContext = React.createContext(undefined);
const CreateMoviesDataDispatchContext = React.createContext(undefined);

function MoviesDataProvider({ children }) {
  const [movies, setMovies] = React.useState(moviesData);

  const handleMoviesDataChange = (movies) => {
    setMovies(movies);
  };

  return (
    <CreateMoviesDataContext.Provider value={{ movies }}>
      <CreateMoviesDataDispatchContext.Provider
        value={{ handleMoviesDataChange }}
      >
        {children}
      </CreateMoviesDataDispatchContext.Provider>
    </CreateMoviesDataContext.Provider>
  );
}

const useCreateMoviesDataContext = () => {
  const context = React.useContext(CreateMoviesDataContext);

  if (context === undefined) {
    throw Error("useCreateMoviesDataContext must be inside MoviesDataProvider");
  }

  return context;
};

const useCreateMoviesDataDispatchContext = () => {
  const context = React.useContext(CreateMoviesDataDispatchContext);

  if (context === undefined) {
    throw Error(
      "useCreateMoviesDataDispatchContext must be inside MoviesDataProvider"
    );
  }

  return context;
};

const useMoviesDataContext = () => {
  return [useCreateMoviesDataContext(), useCreateMoviesDataDispatchContext()];
};

export { MoviesDataProvider, useMoviesDataContext };
