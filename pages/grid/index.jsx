import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Grid = () => {
  return (
    <div>
      <h1 className="display-1">Grid</h1>
      <Container fluid={true}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores
        assumenda consequuntur distinctio earum, eos est expedita explicabo iste laborum
        maxime nam nisi nobis officiis placeat tempore temporibus, voluptates voluptatum.
      </Container>
      <Container>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores
        assumenda consequuntur distinctio earum, eos est expedita explicabo iste laborum
        maxime nam nisi nobis officiis placeat tempore temporibus, voluptates voluptatum.
      </Container>
      <Container>
        <Row>
          <Col xxl>1</Col>
          <Col xxl>2</Col>
          <Col xxl>3</Col>
        </Row>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
          <Col>7</Col>
          <Col>8</Col>
          <Col>9</Col>
          <Col>10</Col>
        </Row>
        <Row>
          <div className="col">1</div>
          <div className="col-6">2</div>
          <div className="col">3</div>
        </Row>
        <div className="row">
          <div className="col-xl-2 col-md col-sm-4 border">1</div>
          <div className="col-xl-6 col-md-6 col-sm-4 border">2</div>
          <div className="col-xl-4 col-md-6 col-sm-4 border">3</div>
        </div>
        <div className="row">
          <div className="col-lg-2 border">1</div>
          <div className="col-md-auto border">Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Alias, praesentium.
          </div>
          <div className="col-lg-2 border">3</div>
        </div>
        <div className="row row-cols-4">
          <div className="col border">1</div>
          <div className="col border">2</div>
          <div className="col border">3</div>
          <div className="col border">4</div>
        </div>
        <div className="row row-cols-3">
          <div className="col border">1</div>
          <div className="col border">2</div>
          <div className="col border">3</div>
          <div className="col border">4</div>
        </div>
        <div className="row row-cols-auto">
          <div className="col border">1</div>
          <div className="col border">2</div>
          <div className="col border">3</div>
          <div className="col border">4</div>
        </div>
        <div className="row row-cols-4">
          <div className="col border">1</div>
          <div className="col border">2</div>
          <div className="col-6 border">3</div>
          <div className="col border">4</div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col border">1</div>
          <div className="col border">2</div>
          <div className="col-6 border">3</div>
          <div className="col border">4</div>
        </div>
      </Container>
    </div>
  );
};

export default Grid;
