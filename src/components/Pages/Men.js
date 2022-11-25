import { useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";
import Widgit from "../common/Widgit";
import NavbarItem from "../common/NavbarItem";

function Men() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    MensClothing();
  }, []);
  const MensClothing = () => {
    fetchProducts()
      .then((res) => {
        setProductData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
        <NavbarItem/>
      <div className="container">
          <div className="m-2 row col-12">
            {productData.filter((product)=>product.category==="men's clothing")
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
  );
}

export default Men;
