import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../component/App";
import Cart from "../component/Cart";
import Nav from "../component/Nav";
import ProductDetail from "../component/ProductDetail";

const PageNotFound = () => {
    return <>
        <p>Page Not Found</p>
    </>
}

function Web() {
    return (
        <BrowserRouter>
            <Nav />
            <div style={{ margin: "18px" }}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/product/:slug" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Web;