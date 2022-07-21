const products = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, loading: true };

    case "PRODUCT_RECEIVED":
      return { ...state, products: action.data, loading: false };

    case "GET_PRODUCT_DETAIL":
      return { ...state, productsDetail: action.data };

    case "PRODUCT_DETAIL_RECEIVED":
      let data = action.data[0] ? action.data[0] : null;
      return { ...state, productDetail: data };

    default:
      return state;
  }
};

export default products;
