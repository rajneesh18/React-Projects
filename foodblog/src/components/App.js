import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFood } from "../actions";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import FoodList from "./FoodList";

function App({ getFood }) {
  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <Container>
        <h2>
          <b>Food Item</b>
        </h2>
        <Row>
          <FoodList />
        </Row>
      </Container>
    </>
  );
}
const mapDispatchToProps = {
  getFood: getFood,
};

App = connect(null, mapDispatchToProps)(App);

export default App;
