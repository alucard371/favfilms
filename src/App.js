import React, { Component } from "react";
import Movie from "./Components/Movie";
import "./App.css";
import Database from "./Data/MoviesData";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        {Database.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title}
            year={movie.Year}
            description={movie.Plot}
            director={movie.Director}
            actors={movie.Actors}
            posters={movie.Poster}
          />
        ))}
      </div>
    );
  }
}

export default App;
