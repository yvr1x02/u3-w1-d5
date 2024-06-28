import React from "react";
import { Carousel } from "react-bootstrap";

const MyCarousel = ({ filmData, mainTitle }) => {
  if (!filmData || filmData.length === 0) {
    return <p>Nessun film disponibile per "{mainTitle}"</p>;
  }

  return (
    <div className="my-carousel">
      <h2>{mainTitle}</h2>
      <Carousel>
        {filmData.map((film, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={film.poster} alt={film.title} />
            <Carousel.Caption>
              <h3>{film.title}</h3>
              <p>Descrizione del film...</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
