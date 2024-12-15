import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "3ea8220e";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

const getMovie = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  } catch (e) {
    console.error(e);
  }
};
