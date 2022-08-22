import React from "react";
import MovieData from './MovieData'
export default function MovieLists({ results,openPoppup,selected,closePopup }) {
  // console.log("selected", selected);
  return (
    <>
    <div className="movielists pt-3">
      <div className="row m-0 ">
          {results.map((list) => (
            <div key={list.imdbID} data-toggle="modal"
            data-target="#exampleModal" className="col-md-4 col-xs-12 m-content" onClick={() => openPoppup(list.imdbID)} >
            <img style={{width:"80%",height:"78%"}} src={list.Poster} />
            <h2 className="pt-1" style={{color:"gray"}}>{list.Title}</h2>
            </div>
          ))}
      </div>
    </div>

    <div>
      {typeof selected.Title !== "undefined" ? <MovieData selected={selected} /> : "" }
    </div>

    </>
  );
}
