import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";
import { getAllProducts } from "../../api/products/Products";
import Loading from "../../components/Loading";
import "./men.css";

function Men() {
  const [men, setMen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initalize = async () => {
    const Product = await getAllProducts();
    setMen(Product.data);
    console.log(Product.data);
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
          {men.map((product) => {
            return (
              <ProductCard
                img={product.image}
                category={product.category}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Men;
