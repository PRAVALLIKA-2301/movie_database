import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "./RootNavigationStyles.css";
import MoviePreview from "../Components/MoviePreview";
import ScreenType from "../enums";
import Home from "../Components/Home";

const RootNavigation = () => {
  const [finalMovieData, setFinalMovieData] = useState([]);
  const [currentActiveScreen, setCurrentActiveScreen] = useState(
    ScreenType.HOME
  );

  return (
    <div className="container">
      <div className="navbar-p">
        <Navbar
          movieCallBack={(response) => {
            setCurrentActiveScreen(response?.type);
            setTimeout(() => {
              setFinalMovieData(response?.data);
            }, 1000);
          }}
        />
      </div>
      <div className="moviepreview-p">
        {currentActiveScreen == ScreenType.HOME ? (
          <Home
            searchCallback={(response) => {
              setCurrentActiveScreen(response?.type);
              setTimeout(() => {
                setFinalMovieData(response?.data);
              }, 1000);
            }}
          />
        ) : (
          <MoviePreview
            movieData={finalMovieData}
            currentActiveScreen={currentActiveScreen}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(RootNavigation);
