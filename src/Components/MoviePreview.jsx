import React, { useEffect, useState } from "react";
import "./MoviePreview.css";
import ScreenType from "../enums";
// import { getOverview } from "../services/api";

const MoviePreview = ({ movieData, currentActiveScreen }) => {
  const [movieList, setMovieList] = useState(movieData);

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

  const renderEachComingSoonItem = async (item) => {
    // let itemData = await getOverview(item?.node?.id);
    // return (
    //   <div key={movie?.node?.id} className="movie-card">
    //     {itemData}
    //     {/* <img src={movie?.node?.primaryImage?.url} className="poster" /> */}
    //   </div>
    // );
  };

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
      case ScreenType.TVSHOWS:
        return (
          <div className="search-results">
            {movieList?.map((movie) => renderEachComingSoonItem(movie))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="movieContainer">
      {movieList?.length > 0 ? (
        renderFinalComponent()
      ) : (
        <div className="loading">
          <h1>Loading......</h1>
        </div>
      )}
    </div>
  );
};
export default React.memo(MoviePreview);
