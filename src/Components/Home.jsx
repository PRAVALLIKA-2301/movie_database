// import React from "react";
import "./Home.css";
import search_png from "../assets/search.png";
import { fetchMovies } from "../services/api";
import { useState } from "react";
import ScreenType from "../enums";

const Home = ({ searchCallback }) => {
  const [query, setQuery] = useState("");

  const resetData = () => {
    let model = {
      data: [],
      type: ScreenType.SEARCH,
    };
    constructCallBack(model);
  };

  const constructCallBack = (response) => {
    let model = {
      data: response,
      type: ScreenType.SEARCH,
    };
    searchCallback(model);
  };

  const search = async () => {
    resetData();
    try {
      const results = await fetchMovies(query);
      constructCallBack(results);
    } catch (err) {
      console.log("Error fetching movies", err);
    }
  };
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Search and Explore</h1>
        <h3>The World of Cinema</h3>
      </div>

      <div className="home-searchbar">
        <input
          type="text"
          placeholder="search movie "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={search_png} alt="search icon" onClick={search} />
      </div>
    </div>
  );
};

export default Home;
