import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ProductItems({ product }) {
  return product
    ? product.map((item) => {
        return (
          <Card color="red" key={item.id} style={{ width: "200px" }}>
            <img
              src={item.img}
              alt={item.slug}
              style={{ minHeight: "200px" }}
            />
            <div style={{ padding: "10px" }}>
              <Link to={`/product/${item.slug}`} className="btn btn-primary">
                <b style={{ fontSize: "14px" }}>{item.title}</b>
              </Link>{" "}
              <br />
              <span style={{ fontSize: "13px", marginTop: "20px" }}>
                Rs. {item.price}
              </span>
            </div>
          </Card>
        );
      })
    : "";
}

const mapStateToProps = (state) => ({
  product: state.products.products,
});

const ProductItem = connect(mapStateToProps, null)(ProductItems);

export default ProductItem;
