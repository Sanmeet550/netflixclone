import React, { useState } from "react";
import useFetchMovieApi from "../customHooks/useFetchMovieApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Upcoming() {
  const api_key = process.env.REACT_APP_API_KEY;
  const img_path = process.env.REACT_APP_IMG_PATH;
  const upComingMovie = useFetchMovieApi(
    `upcoming?api_key=${api_key}&language=en-US&page=1`
  );

  console.log(upComingMovie);
  return (
    <div className="bg-dark text-white">
      <Container>
        <Row>
          {upComingMovie &&
            upComingMovie.map((value) => (
              <Col className="p-4" xs={3}>
                <div className="image-box">
                  <Image
                    src={img_path + value.poster_path}
                    alt="Image Description"
                    fluid
                  />
                  <div className="text-center">
                    <h4>{value.title}</h4>
                    <p>Rating {value.vote_average}</p>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
