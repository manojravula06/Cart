import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";
import { getjewelery } from "../../api/products/Products";
import "./jewellery.css"

const Jewellery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jewellery, setJewellery] = useState([]);
  const [cart,setCart]=useState([])
const loading = () => {
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
    const product = await getjewelery();
    setJewellery(product);
    setIsLoading(false);
  };


  useEffect(() => {
    initialize();
  }, []);
  return (
    <>
      <div>
        <NavbarComponent />
        <h1 className="display-1">Jewellery</h1>
        {loading()}
        <div className="container-fluid">
          <div className="jewellery-category">
            {!isLoading &&
              jewellery.map((product) => {
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
    </>
  );
};

export default Jewellery;
