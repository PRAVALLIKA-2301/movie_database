import "./Navbar.css";
import search_png from "../assets/search.png";
import { useState } from "react";
import { fetchMovies } from "../services/api";
const Navbar = () => {
  const [query, setQuery] = useState([""]);
  const [movies, setMovies] = useState([]);

  const search = async () => {
    if (query === "") {
      alert("Please Enter the Movie Name");
      return;
    }
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      console.log("Error fetching movies", err);
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        movie hunter
      </a>
      <nav className="navbar">
        <a href="/"> HOME</a>
        <a href="/"> POPULAR </a>
        <a href="/">NEW</a>

        <a href="/">HIGH RATED</a>

        <div className="searchbar">
          <input
            type="text"
            placeholder="search movie name "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img
            src={search_png}
            alt="search icon"
            onClick={() => {
              search;
            }}
          />
        </div>
      </nav>
      <div className="search -results">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            {<img src={movie.i.imageUrl} alt={movie.l} />}
            <h4>{movie.l}</h4>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
