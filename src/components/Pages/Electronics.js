import {useState,useEffect} from 'react';
import fetchProducts from '../api/fetchProducts';
import Widgit from '../common/Widgit';
import NavbarItem from "../common/NavbarItem";

const Electronics = () => {
const [electronicsData,setElectronicsData]=useState([]);
useEffect(()=>{
Electornics();
},[])
const Electornics=()=>{
    fetchProducts().then((res)=>{
      console.log(res.data);
      setElectronicsData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
    }

  return (
    <div>
      <NavbarItem/>
      <div className="container p-2">
      <div className="m-2 row col-12">
            {electronicsData.filter((product)=>product.category==="electronics")
            .map((product) => (
              <div className="my-2" style={{width:20+'rem'}}>
                <Widgit
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                />
              </div>
            ))}
          </div>
      </div>

    </div>
  )
}

export default Electronics