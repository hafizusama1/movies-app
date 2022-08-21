import React from "react";
import { Button } from "react-bootstrap";

const MovieItems = ({ movie, handleDeleteMovies }) => {
  return (
    <>
      <tr>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.numberInStock}</td>
        <td>
          <Button
            className="btn btn-primary"
            style={{
              padding: "5px 15px 5px 15px",
              marginRight: "20px",
              fontSize: "14px",
            }}
          >
            Edit
          </Button>

          <Button
            className="btn btn-danger"
            style={{
              padding: "5px 10px 5px 10px",
              fontSize: "14px",
            }}
            onClick={() => handleDeleteMovies(movie._id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
export default MovieItems;
