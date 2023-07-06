import React from "react";

import { RegistrationForm } from "./form/form";
import { UserList } from "./list/list";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const App = () => {
  const [inputValues] = React.useState({
    firstName: "",
    lastName: "",
    contact: "",
  });

  const handleChange = (e) => {
    console.log("change", e);
  };

  return (
    <Container>
      <Row>
        <Col sm={12} lg={6}>
          <RegistrationForm
            inputValues={inputValues}
            handleChange={handleChange}
          />
        </Col>
        <Col sm={12} lg={6}>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
