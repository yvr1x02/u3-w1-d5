import React, { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    films: [],
    isLoading: true,
  };

  fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=e1afcceb&s=${this.props.searchQuery}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        if (objFilm.Search) {
          this.setState({ films: objFilm.Search, isLoading: false });
        }
      })
      .catch((err) => alert(err));
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { films, isLoading } = this.state;
    return (
      <Carousel.Item className="d-block" interval={2000}>
        <Row className="g-1">
          {isLoading ? (
            <p>Caricamento in corso...</p>
          ) : (
            films.map((film, index) => (
              <Col key={index} md="3" lg="2">
                {film.Poster ? (
                  <img src={film.Poster} alt={film.Title} className="img-fluid w-100" crossOrigin="anonymous" />
                ) : (
                  <p>Poster non disponibile</p>
                )}
              </Col>
            ))
          )}
        </Row>
      </Carousel.Item>
    );
  }
}

export default Gallery;
