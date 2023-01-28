import {useState,useEffect} from 'react';
import {fetchProducts} from '../../api/fetchProducts';
import ProductCard from '../../components/ProductCard';
import NavbarComponent from "../../components/Navbar";

const Electronics = () => {

useEffect(()=>{
Electornics();
},[])
const Electornics=()=>{

    }

  return (
    <div>
      <NavbarComponent/>
        <h1 className="display-1">Electronics</h1>
        <ProductCard/>
    </div>
  )
}

export default Electronics