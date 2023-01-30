import {useState,useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";
import { getjewelery } from "../../api/products/Products";

const Jewellery = () => {
const [isLoading,setIsLoading]=useState(false);

const loading=()=>{
  return (
    isLoading && (
      <>
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </>
    )
  );
}
const initialize=async()=>{
  setIsLoading(true);
  const product=await getjewelery()
  console.log(product)
  setIsLoading(false)
}
useEffect(()=>{
initialize()

},[])
  return (
    <>
      <div>
        <NavbarComponent/>
          <h1 className="display-1">Jewellery</h1>
          {loading()}
          {
            !isLoading && (
              <>
              <ProductCard/>
              </>
            )
          }
      </div>
    </>
  );
};

export default Jewellery;
