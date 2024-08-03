import "./Navbar.css";
import search_png from "../assets/search.png";
import { useState } from "react";
import { fetchMovies, fetchPopularMovies, getHighRated } from "../services/api";
import ScreenType from "../enums";
const Navbar = ({ movieCallBack }) => {
  const [query, setQuery] = useState("");

  const resetData = () => {
    let model = {
      data: [],
    };
    movieCallBack(model);
  };

  const search = async () => {
    resetData();
    try {
      const results = await fetchMovies(query);
      constructCallBack(results, ScreenType.SEARCH);
    } catch (err) {
      console.log("Error fetching movies", err);
    }
  };
  const constructCallBack = (response, screenType) => {
    let model = {
      data: response,
      type: screenType,
    };
    movieCallBack(model);
  };

  const getPopularMovies = async () => {
    resetData();
    try {
      const results = await fetchPopularMovies();
      constructCallBack(results, ScreenType.POPULAR);
    } catch (err) {
      console.log("Error fetching Popular movies", err);
    }
  };

  const onPressHome = () => {
    constructCallBack([], ScreenType.HOME);
  };
  const onPressHighRated = async () => {
    resetData();
    try {
      const results = await getHighRated();
      constructCallBack(results, ScreenType.HIGHRATED);
    } catch (err) {
      console.log("Error fetching coming soon movies", err);
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        movie hunter
      </a>
      <nav className="navbar-text">
        <a href="#" onClick={onPressHome}>
          HOME
        </a>
        <a href="#" onClick={getPopularMovies}>
          POPULAR
        </a>
        <a href="#" onClick={onPressHighRated}>
          HIGH RATED
        </a>

        <div className="navbar-searchbar">
          <input
            type="text"
            placeholder="search movie "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img src={search_png} alt="search icon" onClick={search} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
