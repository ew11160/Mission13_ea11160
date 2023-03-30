// bring in the data
import React from 'react';
import { useState } from 'react';
import data from '../MovieData.json';

// create new variable to convert our MovieData (name of the json) to usable data
const moviedatasample = data.MovieData;

// function for MovieList
function MovieList() {
  const [listOMovies, setListOMovies] = useState(moviedatasample);

  // anonymous function
  const addMovie = () => {
    setListOMovies([
      ...moviedatasample,
      {
        Category: 'Thriller/Action',
        Title: 'The Hunt for Red October',
        Year: 1990,
        Director: 'John McTiernan',
        Rating: 'PG',
        Edited: 'No',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {/* go through our code create instance m of each movie */}
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Category}</td>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
