import { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class MyCarouselItem extends Component {
  state = {
    arrayFilms: [],
    isLoading: true,
  };
  fetchFilms = () => {
    fetch(`https://www.omdbapi.com/?apikey=e1afcceb&s=${this.props.nameFilm}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        console.log(objFilm.Search);
        if (objFilm.Search) {
          this.setState({ arrayFilms: objFilm.Search, isLoading: false });
        }
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchFilms();
  }
  render() {
    const { arrayFilms } = this.state;
    return (
      <Carousel.Item className="d-block" interval={2000}>
        <Row className=" g-1">
          {this.state.isLoading ? (
            <p>Caricamento in corso...</p>
          ) : (
            arrayFilms.slice(this.props.indexS, this.props.indexE).map((film, index) => (
              <Col key={index} md="3" lg="2">
                {film.Poster ? (
                  <>
                    <img src={film.Poster} alt={film.Title} className="img-fluid w-100" crossOrigin="anonymous" />
                  </>
                ) : (
                  <p>Caricamento in corso...</p>
                )}
              </Col>
            ))
          )}
        </Row>
      </Carousel.Item>
    );
  }
}
export default MyCarouselItem;
