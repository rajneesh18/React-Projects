import React from "react";

import Button from "../containers/Button";
import Loading from "../containers/Loading";

import ProductItem from "../containers/ProductItem";

function App() {
  return (
    <div>
      <Button />
      <Loading />
      <br />
      <ProductItem />
    </div>
  );
};

export default App;
