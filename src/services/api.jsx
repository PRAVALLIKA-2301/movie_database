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
    throw error;
  }
};
