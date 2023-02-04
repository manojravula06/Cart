import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";
import {getMensCloting } from "../../api/products/Products";
import Loading from "../../components/Loading";
import "./men.css";

function MenClothing() {
  const [men, setMen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initalize = async () => {
    const Product = await getMensCloting();
    console.log(Product)
    setMen(Product.data);
    setIsLoading(false);
  };
  useEffect(() => {
    initalize();
  }, []);
  return (
    <div>
      <NavbarComponent />
      <h1 className="display-1">Men</h1>
      {isLoading && Loading()}
      <div className="container-fluid">
        <div className="men-category">
          {!isLoading && men.map((product) => {
            return (
              <Link to={`/details/${product.id}`} className="link">
              <ProductCard
                title={product.title}
                img={product.image}
                category={product.category}
                price={product.price}
              />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenClothing;
