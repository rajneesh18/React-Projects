import React from "react";
import { connect } from "react-redux";
import img from "../image/loader.png";

function Loading({ loading }) {
  return loading ? (
    <div style={{ textAlign: "center" }}>
      <img src={img} alt="loading" style={{width: "50px", margin: "20px"}}/>
      <h1>Loading</h1>
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({ loading: state.loading });
Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
