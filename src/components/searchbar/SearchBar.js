import React, { useState, useEffect } from "react";
import { useMoviesDataContext } from "../../contexts/MoviesContext";
import { Button, InputGroup, Form } from "react-bootstrap";

const SearchBar = () => {
  const [{ movies }, { handleMoviesDataChange }] = useMoviesDataContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const moviesSearched = [...movies].filter((movie) =>
      movie.title.toLowerCase().startsWith(search.toLowerCase())
    );
    handleMoviesDataChange(moviesSearched);
  }, [search]);

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClearInput = () => {
    setSearch("");
  };

  return (
    <InputGroup className="search-bar">
      <Form.Control
        value={search}
        onChange={handleSearchInputChange}
        placeholder="Search movie by title"
        aria-label="Search Movie"
      />
      {search ? (
        <Button
          variant="outline-secondary"
          id="btnClear"
          onClick={handleClearInput}
        >
          Clear
        </Button>
      ) : null}
    </InputGroup>
  );
};

export default SearchBar;
