import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../home/index";
import Cart from "../cart/Cart";
import Men from "../men/Men";
import WomenClothing from "../women/WomenClothing";
import Electronics from "../electronics/Electronics";
import Jewellery from "../jewellery/Jewellery";
import Login from "../login/Login";


function Routs() {
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

        </Routes>
      </Router>
  );
}

export default Routs;