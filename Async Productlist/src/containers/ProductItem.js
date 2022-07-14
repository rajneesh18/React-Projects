import React from "react";
import { connect } from "react-redux";

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive",
  border: "4px solid RebecaaPurple",
};
function ProductItem({ article }) {
  return article
    ? article.map((item) => {
        return (
          <article key={item.id} style={articleStyle}>
            <div className="media">
              <div className="media-left">
                <img src={item.imageUrl} className="media-object" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">{item.productName}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        );
      })
    : null;
}

const mapStateToProps = (state) => ({
  article: state.product,
});

ProductItem = connect(mapStateToProps, null)(ProductItem);

export default ProductItem;
