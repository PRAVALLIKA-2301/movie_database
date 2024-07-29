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
export const getOverview = async (movieId) => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/v2/get-overview",
    params: {
      tconst: movieId,
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
    console.log("overview", movieId, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTvShowsList = async () => {
  const options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows",
    params: {
      currentCountry: "US",
    },
    headers: {
      "x-rapidapi-key": "212cbbe3d3msh2899cd49ac03560p1bb403jsne067704c2fc2",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
