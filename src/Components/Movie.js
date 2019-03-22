import React, { Component } from "react";
import PropTYpes from "prop-types";
import Poster from "./Poster";

class Movie extends Component {

  static defaultProps = {
    title: "[pas de titre]",
    year: -1,
    description: "[Pas de description]",
    director: "[Pas de director]",
    actors: [],
    posters: []
  }

  static propTypes = {
    title: PropTYpes.string,
    year: PropTYpes.number.isRequired,
    description: PropTYpes.string.isRequired,
    director: PropTYpes.arrayOf(PropTYpes.string.isRequired),
    actors: PropTYpes.string.isRequired,
    posters: PropTYpes.arrayOf(PropTYpes.string)
  };

  render() {
    const { title, year, description, director, actors, posters } = this.props;
    return (
      <div className="MovieBox">
      <Poster images={posters} text={title}/>
        <p>
          <b>Titre : </b>
          {title}
        </p>
        <p>
          <b>Année : </b>
          {year>0?year:"Pas d'année renseignée"} {"sortit depuis " + (new Date().getFullYear() - year) + " ans"}
        </p>
        <p>
          <b>Description : </b>
          {description}
        </p>
        <p>
          <b>Directors :</b>
          <ul>
            {director.map((d, index) => (
              <li key={index}>{d}</li>
            ))}
          </ul>
        </p>
        <p>
          <b>Actors : </b>
          {actors}
        </p>
      </div>
    );
  }
}
export default Movie;
