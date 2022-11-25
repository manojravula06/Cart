import { useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";
import Widgit from "../common/Widgit";
import NavbarItem from "../common/NavbarItem";

const Jewellery = () => {
  const [jewelleryData, setJewelleryData] = useState([]);
  useEffect(() => {
    JewelleryProduct();
  }, []);
  const JewelleryProduct = () => {
    fetchProducts().then((res) => {
      console.log(res);
      setJewelleryData(res.data);
    });
  };
  return (
    <>
      <div>
        <NavbarItem/>
        <div className="container p-2">
          <div className="m-2 row col-12">
            {jewelleryData.filter((product)=>product.category==="jewelery")
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
    </>
  );
};

export default Jewellery;
