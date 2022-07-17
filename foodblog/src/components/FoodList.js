import React from "react";
import { connect } from "react-redux";

import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

function FoodList({ list }) {
  return list
    ? list.map((item) => {
        return (
          <Col key={item.id} className="col-3">
            <br />
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={item.img}
                alt={item.slug}
                style={{ width: "100%", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>

                <Link
                  to={`/detail/${item.slug}`}
                  className="btn btn-primary"
                >
                  Detail
                </Link>
              </div>
            </div>
          </Col>
        );
      })
    : "";
}

const mapStateToProps = (state) => ({
  list: state.food.food,
});

FoodList = connect(mapStateToProps, null)(FoodList);
export default FoodList;
