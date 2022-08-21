import React, { useState } from "react";
import { Tab, ListGroup, TabContainer, ListGroupItem } from "react-bootstrap";
import genreData from "../../data/GenreData.json";
import { useGenreDataContext } from "../../contexts/GenresContext";
import AddNewMovie from "../modal/AddNewModal";

const MoviesGenre = () => {
  const [{ activeGenre }, { handleGenreDataChange }] = useGenreDataContext();

  const showAllMovies = () => {
    handleGenreDataChange({ name: "All Movies", id: "0" });
    return;
  };

  const showActiveGenreMovies = (genre) => {
    handleGenreDataChange({ name: genre.name, id: genre._id });
    return;
  };

  return (
    <div>
      <TabContainer id="genreListGroup" defaultActiveKey={activeGenre.name}>
        <ListGroup as="ul">
          <ListGroupItem
            as="li"
            action
            href="All Movies"
            onClick={showAllMovies}
            style={{ cursor: "pointer" }}
          >
            All Movies
          </ListGroupItem>
          {genreData.map((genre) => {
            return (
              <ListGroupItem
                as="li"
                key={genre._id}
                onClick={() => {
                  showActiveGenreMovies(genre);
                }}
                action
                href={genre.name}
                style={{ cursor: "pointer" }}
              >
                {genre.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </TabContainer>
    </div>
  );
};
export default MoviesGenre;
