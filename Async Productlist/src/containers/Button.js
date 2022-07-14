import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../actions";

function Button({ getProduct }) {
  return (
    <div>
      <br />
      <center>
        <button onClick={getProduct} className="btn btn-success">
          Press to see Products
        </button>
      </center>
    </div>
  );
}

const mapDispatchToProps = {
  getProduct: getProduct,
};

Button = connect(null, mapDispatchToProps)(Button);

export default Button;
