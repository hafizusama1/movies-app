import React, { createContext, useContext, useState } from "react";

const createGenreDataContext = createContext(undefined);
const createGenreDataDispatchContext = createContext(undefined);

function GenreDataProvider({ children }) {
  const [activeGenre, setActiveGenre] = useState({
    id: "0",
    name: "All Movies",
  });

  const handleGenreDataChange = (activeGenre) => {
    setActiveGenre(activeGenre);
  };

  return (
    <createGenreDataContext.Provider value={{ activeGenre }}>
      <createGenreDataDispatchContext.Provider
        value={{ handleGenreDataChange }}
      >
        {children}
      </createGenreDataDispatchContext.Provider>
    </createGenreDataContext.Provider>
  );
}

const useCreateGenreDataContext = () => {
  const context = useContext(createGenreDataContext);
  if (context === undefined) {
    throw Error("useCreateGenreDataContext must be inside GenreDataProvider");
  }

  return context;
};

const useCreateGenreDataDispatchContext = () => {
  const context = useContext(createGenreDataDispatchContext);
  if (context === undefined) {
    throw Error(
      "useCreateGenreDispatchContext must be inside GenreDataProvider"
    );
  }
  return context;
};

const useGenreDataContext = () => {
  return [useCreateGenreDataContext(), useCreateGenreDataDispatchContext()];
};

export { GenreDataProvider, useGenreDataContext };
