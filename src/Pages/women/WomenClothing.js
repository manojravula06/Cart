import { useState, useEffect } from "react";
import { getWomensCloting } from "../../api/products/Products";
import NavbarItem from "../../components/Navbar";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import "./womenclothing.css";

const WomenClothing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [womenclothing, setWomenClothing] = useState([]);
  const [message, setMessage] = useState("");

  const initialize = async () => {
    const product = await getWomensCloting();
    setWomenClothing(product);
    setIsLoading(false);
    console.log(product.data)
    product.data === 0 && setMessage("Out or Stock");
  };
  useEffect(() => {
    initialize();
  }, []);
  return (
    <div>
      <NavbarItem />
      <h1 className="display-1">Women</h1>
      {isLoading && Loading()}
      <div className="container-fluid">
        <h4 className="text-danger">{message}</h4>
        <div className="women-category">
          {womenclothing.map((product) => {
            return (
              <>
                <ProductCard
                  img={product.image}
                  price={product.price}
                  category={product.category}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WomenClothing;
