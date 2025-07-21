import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/pages/Signup";
import SignIn from "./components/pages/SignIn";
import ProtectRoute from "./components/Routes/ProtectRoute";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/home/Home";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ProtectRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
