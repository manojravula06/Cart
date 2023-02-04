import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { getElectronics } from "../../api/products/Products";
import ProductCard from "../../components/ProductCard";
import "./electronics.css";

const Electronics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [electronics, setElectronics] = useState([]);

  const loader = () => {
    return (
      isLoading && (
        <>
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </>
      )
    );
  };
  const initialize = async () => {
    setIsLoading(true);
    const product = await getElectronics();
    setElectronics(product);
    setIsLoading(false);
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="display-1"> Electronics</h1>
      {loader()}
      <div className="container-fluid">
        <div className="electronics-category">
          {!isLoading &&
            electronics.map((product) => {
              return (
                <>
                  <Link to={`/details/${product.id}`} className="link">
                    <ProductCard
                      img={product.image}
                      title={product.title}
                      price={product.price}
                      category={product.category}
                    />
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
