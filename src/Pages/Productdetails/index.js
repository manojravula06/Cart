import{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Navbar from "../../components/Navbar";
import {getSingleProduct} from "../../api/products/Products";

const Details = () => {
  const {productId:selectedPorduct}=useParams();
  const [product,setProduct]=useState(null);

  const initialize=async()=>{
    const response=await getSingleProduct(selectedPorduct)
    console.log(response)
    
  }

  useEffect(()=>{
    initialize()
  },[])

  return (
    <div>
      <Navbar/>
      <h4>Details</h4>
      </div>
  )
}

export default Details