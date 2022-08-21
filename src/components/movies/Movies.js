import React, { useState } from "react";
import { useMoviesDataContext } from "../../contexts/MoviesContext";
import { useGenreDataContext } from "../../contexts/GenresContext";
import SearchBar from "../searchbar/SearchBar";
import AddNewModal from "../modal/AddNewModal";
import MoviesTable from "./MoviesTable";
import Pagination from "../pagination/Pagination";
import DeleteModal from "../modal/DeleteModal";

const Movies = () => {
  const [{ movies }, { handleMoviesDataChange }] = useMoviesDataContext();
  const [{ activeGenre }] = useGenreDataContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const [directDeleteMovie, setDirectDeleteMovie] = useState(false);
  const [deleteModal, setDeleteModal] = useState({
    isVisible: false,
    targetId: null,
  });

  // Filter Movies By Genre

  const filterMovies = movies.filter((movie) => {
    if (activeGenre.id === "0") {
      return movie.genre._id !== activeGenre.id;
    }
    return movie.genre._id === activeGenre.id;
  });

  //Pagination

  const indexOfFirstMovie = currentPage * moviesPerPage - moviesPerPage;
  const indexOfLastMovie = currentPage * moviesPerPage - 1;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalMovies = filterMovies.length;

  const moviesToDisplay = filterMovies.filter((_movie, index) => {
    if (index >= indexOfFirstMovie && index <= indexOfLastMovie) {
      return true;
    }
    return false;
  });

  // Delete Function

  const deleteMovie = (id) =>
    handleMoviesDataChange(movies.filter((movie) => movie._id !== id));

  const handleDeleteMovies = (id) => {
    if (!directDeleteMovie) {
      setDeleteModal({
        isVisible: true,
        targetId: id,
      });
      return;
    }
    deleteMovie(id);
  };
  const handleButtonConfirmDelete = () => {
    deleteMovie(deleteModal.targetId);
    setDeleteModal({
      isVisible: false,
      targetId: null,
    });
    return;
  };

  const handleDirectDeleteMovieIsChecked = (event) => {
    if (event.target.checked) {
      setDirectDeleteMovie(true);
    }
    return;
  };

  const handleButtonCloseDeleteModal = () => {
    setDeleteModal({
      isVisible: false,
      targetId: null,
    });
    setDirectDeleteMovie(false);
    return;
  };

  return (
    <div className="movies-container">
      <p>Showing {moviesToDisplay.length} movies in the database</p>

      <AddNewModal />

      <SearchBar />

      <MoviesTable
        moviesToDisplay={moviesToDisplay}
        handleDeleteMovies={handleDeleteMovies}
      />

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={totalMovies}
        paginate={paginate}
        currentPage={currentPage}
      />

      <DeleteModal
        showModal={deleteModal}
        handleButtonClose={handleButtonCloseDeleteModal}
        handleButtonConfirm={handleButtonConfirmDelete}
        handleRememberIsChecked={handleDirectDeleteMovieIsChecked}
      />
    </div>
  );
};

export default Movies;
