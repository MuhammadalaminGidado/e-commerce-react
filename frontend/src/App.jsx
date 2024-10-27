// import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </div>
  );
}

export default App;
