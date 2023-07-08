import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Myfoto = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="../images/photo.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Myfoto;
