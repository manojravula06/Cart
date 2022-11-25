import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../components/Pages/Home";
import Cart from "../components/Pages/Cart";
import Men from "../components/Pages/Men";
import WomenClothing from "../components/Pages/WomenClothing";
import Electronics from "../components/Pages/Electronics";
import Jewellery from "../components/Pages/Jewellery";
import Login from "./Pages/Login";
import Details from "./Pages/Details";

function Routs() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/mensclothing"} element={<Men />} />
          <Route path={"/womenclothing"} element={<WomenClothing/>}/>
          <Route path={"/electronics"} element={<Electronics/>}/>
          <Route path={"/jewellery"} element={<Jewellery/>}/>
          <Route path={`/womenclothing/:id/details`} element={<Details/>}/>
        </Routes>
      </Router>
  );
}

export default Routs;
