import React from "react";

export default function MovieData({ selected, closePopup }) {
  console.log("selected", selected);
  return (
    <>
      <div className="">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {selected.Title}
                </h5>
              </div>
              <div className="modal-body">
                <img src={selected.Poster} />
                <h3>Actor = {selected.Actors}</h3>
                <h3>Awards = {selected.Awards}</h3>
                <h3>BoxOffice = {selected.BoxOffice}</h3>
                <h3>Rating = {selected.imdbRating}</h3>
                <h3>Released Date = {selected.Released}</h3>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={closePopup}
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
