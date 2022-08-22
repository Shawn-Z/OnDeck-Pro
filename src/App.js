import React, { useState } from "react";
import "./styles.css";
import Search from "./components/Search";
import MoviesLists from "./components/MoviesLists";
import axios from "axios";
export default function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected:{}
  });

  const apiurl = "https://www.omdbapi.com/?apikey=592abf89";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
    console.log("input", state.s);
  };

  const openPoppup = id => {
      axios(apiurl + "&i=" + id).then(({ data }) => {
        let results = data;

        setState(prevState => {
          return { ...prevState, selected:results };
        });
      });
      // console.log("openpop clicked", state.selected)
  };

  const closePopup = () =>{
    setState(prevState =>{
      return{ ...prevState,selected:{} }
    })
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Movie Search</h1>
      </div>
      <div className="movie-content">
        <Search handleInput={handleInput} search={search} />
        <MoviesLists results={state.results} openPoppup={openPoppup} selected={state.selected} closePopup={closePopup} />
      
      </div>
    </div>
  );
}
