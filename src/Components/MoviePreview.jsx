import React, { useEffect, useState } from "react";
import "./MoviePreview.css";

const MoviePreview = ({ movieData, isPopular }) => {
  const [movieList, setMovieList] = useState(movieData);

  useEffect(() => {
    console.log("movieData", movieData);
    if (isPopular) {
      setMovieList(movieData?.data?.data?.movies?.edges);
    } else {
      setMovieList(movieData);
    }
  }, [movieData]);

  useEffect(() => {
    setMovieList([]);
  }, [isPopular]);

  return (
    <div className="movieContainer">
      {movieList?.length > 0 ? (
        isPopular ? (
          <div className="search-results">
            {movieList?.map((movie) => (
              <div key={movie?.id} className="movie-card">
                <img src={movie?.node?.primaryImage?.url} className="poster" />
              </div>
            ))}
          </div>
        ) : (
          movieList.length > 0 && (
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
                      <h5>Release Year- {movie.y}</h5>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        )
      ) : (
        <div className="loading">
          <h2>Loading......</h2>
        </div>
      )}
    </div>
  );
};
export default React.memo(MoviePreview);
