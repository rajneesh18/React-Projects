import React from "react";
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";

import { getProductDetail } from "../actions/product";

import { Link, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";

function ProductDetails({ detail }) {
  var dispatch = useDispatch({});
  const { slug } = useParams("");

  useEffect(() => {
    dispatch(getProductDetail(slug));
  }, []);

  var addToCart = () => {
    alert('Product Added To Cart')
  }

  return detail ? (
    <div>
      <Link to={`/`} className="btn btn-primary">
        <Button color="blue">Back</Button>
      </Link>

      <div style={{ margin: "10px auto", display: "flex" }}>
        <div>
          <img src={detail.img} alt={detail.slug} style={{ width: "70%" }} />
        </div>
        <div>
            <h2>{detail.title}</h2>
            <p>{detail.desc}</p>
            <p><span style={{fontSize: "25px", color: "green", fontWeight: "bold"}}>Rs. {detail.price}</span></p>
            
            <Button color="red" onClick={addToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  ) : "";
}

const mapStateToProps = (state) => ({
  detail: state.products.productDetail,
});

const ProductDetail = connect(mapStateToProps, null)(ProductDetails);
export default ProductDetail;
