import "./Navbar.css";
import search_png from "../assets/search.png";
import { useState } from "react";
import {
  fetchMovies,
  fetchPopularMovies,
  getComingSoonList,
} from "../services/api";
import ScreenType from "../enums";
const Navbar = ({ movieCallBack, activeScreenCallback }) => {
  const [query, setQuery] = useState("");

  const resetData = () => {
    let model = {
      data: [],
    };
    movieCallBack(model);
  };

  const search = async () => {
    resetData();
    activeScreenCallback(ScreenType.SEARCH);
    try {
      const results = await fetchMovies(query);
      constructCallBack(results);
    } catch (err) {
      console.log("Error fetching movies", err);
    }
  };
  const constructCallBack = (response) => {
    let model = {
      data: response,
    };
    movieCallBack(model);
  };

  const getPopularMovies = async () => {
    resetData();
    activeScreenCallback(ScreenType.POPULAR);

    try {
      const results = await fetchPopularMovies();
      constructCallBack(results);
    } catch (err) {
      console.log("Error fetching Popular movies", err);
    }
  };

  const onPressHome = () => {
    activeScreenCallback(ScreenType.HOME);
  };
  const onPressComingSoon = async () => {
    resetData();
    activeScreenCallback(ScreenType.COMINGSOON);

    try {
      const results = await getComingSoonList();
      constructCallBack(results);
    } catch (err) {
      console.log("Error fetching coming soon movies", err);
    }
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        movie hunter
      </a>
      <nav className="navbar">
        <a href="#" onClick={onPressHome}>
          Home
        </a>
        <a href="#" onClick={getPopularMovies}>
          POPULAR
        </a>
        <a href="#" onClick={onPressComingSoon}>
          COMING SOON
        </a>
        <a href="/">HIGH RATED</a>

        <div className="searchbar">
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
