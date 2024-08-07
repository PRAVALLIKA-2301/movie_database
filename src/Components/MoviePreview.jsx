import React, { useEffect, useState } from "react";
import "./MoviePreview.css";
import ScreenType from "../enums";
import Lottie from "react-lottie";
// import { getOverview } from "../services/api";
import * as loading from "../assets/Loading_animation.json";
import * as flight from "../assets/flight_animation.json";

const MoviePreview = ({ movieData, currentActiveScreen }) => {
  const [movieList, setMovieList] = useState(movieData);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  const IMAGE_SIZE = "w500";

  useEffect(() => {
    console.log("movieData", movieData);
    if (currentActiveScreen == ScreenType.POPULAR) {
      setMovieList(movieData?.data?.data?.movies?.edges);
    } else {
      setMovieList(movieData);
    }
  }, [movieData]);

  useEffect(() => {
    setMovieList([]);
  }, [currentActiveScreen]);

  const renderFinalComponent = () => {
    switch (currentActiveScreen) {
      case ScreenType.POPULAR:
        return (
          <div className="search-results">
            {movieList?.map((movie) => (
              <div key={movie?.id} className="movie-card">
                <img src={movie?.node?.primaryImage?.url} className="poster" />
                <h4> Name: {movie?.node?.titleText?.text}</h4>

                <h4>Released Year: {movie?.node?.releaseYear?.year}</h4>
                <h4>
                  Genre: {movie?.node?.titleGenres?.genres[0]?.genre?.text},
                  {movie?.node?.titleGenres?.genres[1]?.genre?.text}
                </h4>
              </div>
            ))}
          </div>
        );
      case ScreenType.SEARCH:
        return (
          movieList?.length > 0 && (
            <div className="search-results">
              {movieList.map((movie) => (
                <div key={movie.id} className="movie-card">
                  {movie.i && (
                    <img
                      src={movie.i.imageUrl}
                      alt={movie.l}
                      className="poster"
                    />
                  )}
                  {movie.i && (
                    <div className="font">
                      <h5>Type - {movie.qid}</h5>

                      <h4>Name - {movie.l}</h4>

                      {movie.s && <h5>Main Cast - {movie.s}</h5>}
                      {movie.y && <h5>Release Year- {movie.y}</h5>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        );
      case ScreenType.HIGHRATED:
        return (
          <div className="search-results">
            {movieList?.map((movie) => (
              <div key={movie?.id} className="movie-card">
                <img
                  src={`${IMAGE_BASE_URL}${IMAGE_SIZE}${movie?.poster_path}`}
                  className="poster"
                />
                <h5> Name: {movie?.title}</h5>

                <h5>Released Date: {movie?.release_date}</h5>

                <h6>Overview : {movie?.overview}</h6>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // const defaultOptions2 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: flight,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="movieContainer">
      {movieList?.length > 0 ? (
        renderFinalComponent()
      ) : (
        <div className="loading">
          <Lottie options={defaultOptions1} height={200} width={200} />
          {/* <Lottie options={defaultOptions2} height={200} width={200} /> */}
        </div>
      )}
    </div>
  );
};
export default React.memo(MoviePreview);
