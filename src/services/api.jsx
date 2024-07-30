import axios from "axios";
export const fetchMovies = async (query) => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "212cbbe3d3msh2899cd49ac03560p1bb403jsne067704c2fc2",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result.d;
  } catch (error) {
    console.error(error);
  }
};
export const fetchPopularMovies = async () => {
  const options = {
    method: "GET",
    url: `https://imdb8.p.rapidapi.com/title/v2/get-popular`,
    params: {
      first: "20",
      country: "US",
      language: "en-US",
    },
    headers: {
      "x-rapidapi-key": "212cbbe3d3msh2899cd49ac03560p1bb403jsne067704c2fc2",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjdkYzQwMDUwOTkxOWM0NTlkZmEyODMwNTdmZmNkMyIsIm5iZiI6MTcyMjMxNzc3Ny45NTI2MjgsInN1YiI6IjY2YTg3NmExN2ZkODI4OGM5YjVmYjJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9PFbZFOYT-NqCOQsH5nIZpNSyfR5BidYm7YskTnQt-4";
const API_KEY = "b27dc400509919c459dfa283057ffcd3";
export const getHighRated = async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      api_key: API_KEY,
      sort_by: "vote_average.desc",
      "vote_count.gte": "1000",
      "vote_average.gte": "8.0",
    },
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("response", response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
