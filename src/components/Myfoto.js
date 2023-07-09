import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../images/photo.jpg";

const Myfoto = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col xs={6} md={4}>
          {/* <Image /> */}
          <Image
            src={image}
            alt=""
            style={{
              minWidth: "10rem",
              minHeight: "10rem",
              maxWidth: "15rem",
              maxHeight: "15rem",
            }}
          />
        </Col>
        <Col>
          <p>
            Hello, my name is Madina, I am originally from Kazakhstan and I have
            a dream to become a software developer. Since childhood, I have
            always been interested in the tech industry. This motivated me to
            become a telecommunications engineer, but I feel that I lacked some
            knowledge of what constitutes the "soul" of equipment. When I moved
            to Seattle, I was surrounded by people who worked as developers, and
            my dream became more tangible. One of my dev friends recommended me
            to start with HTML and CSS and I started learning how to code on my
            own using YouTube, Coursera and Udemy and I become in love with it!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Myfoto;
