import "./App.css";
import Movies from "./components/movies/Movies";
import MoviesGenre from "./components/genres/MoviesGenre";

function App() {
  return (
    <div className="main">
      <MoviesGenre />
      <Movies />
    </div>
  );
}

export default App;
