import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";

const ROUNDED_QUESTION_MARK = (
  <svg width="50" height="50">
    <circle cx="25" cy="25" r="10" fill="#888888" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="white"
      fontFamily="Verdana"
      dy=".3em"
    >
      ?
    </text>
    ?
  </svg>
);

export const RegistrationForm = (props) => {
  return (
    <div style={{ border: "1px dotted #bbf", padding: 10 }}>
      <div style={{ position: "relative" }}>
        <h1>S'inscrire</h1>
        <p>C'est rapide et facile</p>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <CloseButton />
        </div>
      </div>

      <hr />
      <Container className="p-3">
        <Form>
          <Row>
            <Form.Group as={Col} sm={12} lg={6}>
              <Form.Control
                type="text"
                defaultValue={props.inputValues.firstName}
                name="firstName"
                required
                onChange={props.handleChange}
                placeholder="Prenom"
              />
            </Form.Group>

            <Form.Group as={Col} sm={12} lg={6}>
              <Form.Control
                type="text"
                defaultValue={props.inputValues.lastName}
                name="lastName"
                required
                onChange={props.handleChange}
                placeholder="Nom de familie"
              />
            </Form.Group>
          </Row>

          <p>{"\u00A0"}</p>
          <Row>
            <Form.Group as={Col} lg={12} sm={12}>
              <Form.Control
                type="text"
                defaultValue={props.inputValues.contact}
                name="contact"
                required
                onChange={props.handleChange}
                placeholder="Numero de mobile out e-mail"
              />
            </Form.Group>
          </Row>
          <p>{"\u00A0"}</p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ zoom: "75%" }}>
              Date de naissance {ROUNDED_QUESTION_MARK}
            </Form.Label>
            <Row>
              <Col sm={12} lg={4}>
                <Form.Select style={{ width: "100%" }}>
                  {Array.from(new Array(31)).map((x, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col sm={12} lg={4}>
                <Form.Select style={{ width: "100%" }}>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((x, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {x}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
              <Col sm={12} lg={4}>
                <Form.Select style={{ width: "100%" }}>
                  {Array.from(new Array(120)).map((x, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {1900 + i}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ zoom: "75%" }}>
              Genre {ROUNDED_QUESTION_MARK}
            </Form.Label>
            <Row>
              <Col lg={6} sm={6}>
                <Form.Check
                  reverse
                  inline
                  label="Femme"
                  name="gender"
                  type="radio"
                  style={{ border: "1px solid lightgray", borderRadius: 4 }}
                />
                <Form.Check
                  reverse
                  inline
                  label="Homme"
                  name="gender"
                  type="radio"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo ?</Form.Label>
            <div style={{ border: "1px dashed blue" }}>
              <Form.Control type="file" />
              <p>or drop file here</p>
            </div>
          </Form.Group>
          <div style={{ padding: 10 }}>
            En cliquant sur S'inscrire, vous acceptez nos{" "}
            <span style={{ color: "blue" }}>Conditions generales</span>.
            Decouvrez comment nous recueillons. utilisons et partageons vos
            donnees ...............................
          </div>
          <Row className="justify-content-md-center">
            <Button
              style={{ fontWeith: "bold" }}
              lg={6}
              sm={3}
              as={Col}
              variant="success"
            >
              S'escrire
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
