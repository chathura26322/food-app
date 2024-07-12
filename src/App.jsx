import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <div className="w-[90%] m-auto z-[5]">
        <Navbar />
      </div>
      <hr className="w-[100%] m-auto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
