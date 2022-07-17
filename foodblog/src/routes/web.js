import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import FoodDetail from "../components/FoodDetail";

const Pagenotfound = () => {
  return (
    <>
      <p>Page Not Found</p>
    </>
  );
};

function Web() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:slug" element={<FoodDetail />} />
        
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Web;
