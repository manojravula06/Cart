import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../LandingPage/index";
import Cart from "../cart/Cart";
import Men from "../men/Men";
import WomenClothing from "../women/WomenClothing";
import Electronics from "../electronics/Electronics";
import Jewellery from "../jewellery/index";
import Details from "../details/index";
import Login from "../login/Login";


function RoutesPage() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/men"} element={<Men />} />
          <Route path={"/women"} element={<WomenClothing/>}/>
          <Route path={"/electronics"} element={<Electronics/>}/>
          <Route path={"/jewellery"} element={<Jewellery/>}/>
          <Route path={"/details"} element={<Details/>}/>
        </Routes>
      </Router>
  );
}

export default RoutesPage;
