import React from "react";
import MovieItems from "./MovieItems";
import Table from "react-bootstrap/Table";

const MoviesTable = ({ moviesToDisplay, handleDeleteMovies }) => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesToDisplay.map((movie) => {
            return (
              <MovieItems
                movie={movie}
                key={movie._id}
                handleDeleteMovies={handleDeleteMovies}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MoviesTable;
