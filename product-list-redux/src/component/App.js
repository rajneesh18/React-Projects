import React, { useEffect } from "react";
import ProductItem from "../component/ProductItem";

import { getProduct } from "../actions/product";
import { useDispatch } from "react-redux";
import { Card } from 'semantic-ui-react'

function App() {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow={4}>
        <ProductItem />
      </Card.Group>
    </div>
  );
}

export default App;
