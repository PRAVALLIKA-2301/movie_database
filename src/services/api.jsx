import axios from "axios";
export const fetchMovies = async (query) => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "275ea49978mshb3ce54e8a8131e1p179052jsn17e54dbfbb13",
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
    url: "https://imdb8.p.rapidapi.com/title/v2/get-popular",
    params: {
      first: "20",
      country: "US",
      language: "en-US",
    },
    headers: {
      "x-rapidapi-key": "275ea49978mshb3ce54e8a8131e1p179052jsn17e54dbfbb13",
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
