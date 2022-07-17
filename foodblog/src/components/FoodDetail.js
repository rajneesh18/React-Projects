import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function FoodDetail() {
  const [detail, setDetail] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_API_URL + "/foods?slug=" + slug,
    }).then(
      (res) => {
        let data = res.data ? res.data[0] : null;
        setDetail(data);
      },
      (error) => {
        console.log("Error from FOOD API", error);
      }
    );
  });

  return (
    <Container>
      <Link to={`/`} className="btn btn-primary">
        Back
      </Link>
      <br />
      <h2>
        <b>Food Detail</b>
      </h2>
      <Row>
        <Col className="col-4">
          <img
            src={detail.img}
            alt="food image"
            style={{ width: "80%", height: "80%" }}
          />
        </Col>
        <Col className="col-5">
          <h2>
            <b>{detail.title}</b>
          </h2>
          <h4>
            <b>Price: Rs. {detail.price}</b>
          </h4>

          <p>
            <b>Description : </b>
            <span>{detail.desc}</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default FoodDetail;
