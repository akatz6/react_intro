import { useState } from "react";
import { movies } from "./movies.js";
import DisplayMovies from "./displayMovies.jsx";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [movies2, setMovies] = useState(movies);

  const click = (x) => {
    setCount(count + x);
  };

  return (
    <>
      <Button variant="primary" onClick={() => click(2)}>
        count is {count}
      </Button>
      <br />
      <br />
      <br />
      <div className="container">
        {movies2.map((movie) => (
          <DisplayMovies
            key={movie.Title}
            title={movie.Title}
            image={movie.Images[0]}
            rated={movie.Rated}
          />
        ))}
      </div>
    </>
  );
}

export default App;
