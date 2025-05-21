import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the best movie recommendations and reviews. Stay
              updated with the latest in cinema.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/popular" className="text-white text-decoration-none">
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="/top-rated"
                  className="text-white text-decoration-none"
                >
                  Top Rated
                </a>
              </li>
              <li>
                <a href="/upcoming" className="text-white text-decoration-none">
                  Upcoming
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@moviesite.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Film Street, Los Angeles, CA</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <small>
              &copy; {new Date().getFullYear()} MovieSite. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
