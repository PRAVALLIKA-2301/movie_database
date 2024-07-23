import "./Navbar.css";
import search_png from "../assets/search.png";
import { useEffect } from "react";
const Navbar = () => {
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=titanic`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "275ea49978mshb3ce54e8a8131e1p179052jsn17e54dbfbb13",
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
    },
  };
  const search = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    search("titanic");
  }, []);

  return (
    <header className="header">
      <a href="/" className="logo">
        movie hunter
      </a>
      <nav className="navbar">
        <a href="/"> HOME</a>
        <a href="/">MOST POPULAR</a>
        <a href="/">NEW</a>

        <a href="/">ABOUT</a>

        <div className="searchbar">
          <input type="text" placeholder="search movie  " />
          <img src={search_png} alt="search icon" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
