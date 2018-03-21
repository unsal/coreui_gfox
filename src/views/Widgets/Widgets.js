import React, {Component} from "react";
import {Row, Col, CardGroup} from "reactstrap";
import Widget01 from './Widget01';
import Widget02 from './Widget02';
import Widget03 from './Widget03';
import Widget04 from './Widget04';

class Widgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="6" md="2">
            <Widget04 icon="icon-people" color="info" header="Kurum Iliskisi" value="25">Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-user-follow" color="success" header="Süreç Sahibi" value="25">New Clients</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-basket-loaded" color="warning" header="Kişisel Veriler" value="25">Products sold</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-pie-chart" color="primary" header="İşlenme Amacı" value="25">Returning Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speedometer" color="danger" header="Toplama Kanalları" value="25">Avg. Time</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speech" color="info" header="972" value="25">Comments</Widget04>
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="2">
            <Widget04 icon="icon-people" color="info" header="Profiller" value="25" invert>Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-user-follow" color="success" header="385" value="25" invert>New Clients</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25" invert>Products sold</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-pie-chart" color="primary" header="28%" value="25" invert>Returning Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speedometer" color="danger" header="5:34:11" value="25" invert>Avg. Time</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speech" color="info" header="972" value="25" invert>Comments</Widget04>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Widgets;