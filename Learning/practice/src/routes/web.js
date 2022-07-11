import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../component/App";
import Login from "../component/Login";
import Nav from "../component/Nav";
import Register from "../component/Register";

const Pagenotfound = () => {
    return <>
        <p>Page Not Found</p>
    </>
}

function Web() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/*" element={<Pagenotfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Web;