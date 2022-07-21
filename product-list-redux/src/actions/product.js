export const getProduct = () => ({
    type: 'GET_PRODUCT',
})

export const getProductDetail = (slug) => ({
    type: 'GET_PRODUCT_DETAIL',
    slug: slug
})