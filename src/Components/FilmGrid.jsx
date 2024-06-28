import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class FilmGrid extends Component {
  state = {
    arrayFilms: [],
    isLoading: true,
  };

  fetchFilms = () => {
    const { filmName } = this.props;

    fetch(`https://www.omdbapi.com/?apikey=e1afcceb&s=${filmName}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        console.log("Dati ricevuti:", objFilm);

        if (objFilm.Search) {
          const filmsWithImages = objFilm.Search.map((film) => ({
            title: film.Title,
            poster: film.Poster,
          }));
          this.setState({ arrayFilms: filmsWithImages, isLoading: false });
        } else {
          this.setState({ isLoading: false });
        }
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        alert("Si è verificato un errore durante il caricamento dei film.");
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { arrayFilms, isLoading } = this.state;

    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {isLoading ? (
          <p>Caricamento in corso...</p>
        ) : arrayFilms.length === 0 ? (
          <p>Nessun film trovato per "{this.props.filmName}"</p>
        ) : (
          arrayFilms.map((film, index) => (
            <Col key={index}>
              <div className="card">
                <img src={film.poster} className="card-img-top" alt={film.title} />
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    );
  }
}

export default FilmGrid;
