import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getSingleProduct } from "../../api/products/Products";
import Loading from "../../components/Loading";
import "./Productdetails.css";

const Details = () => {
  const { productId: selectedPorduct } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const initialize = async () => {
    const response = await getSingleProduct(selectedPorduct);
    console.log(response);
    setProduct(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading && Loading()}
      <div className="container-fluid">
        <div className="m-2">
          <div className="d-flex flex-wrap p-2">
            <img
              src={product.image}
              alt="img_missigng"
              className="single_product"
            />
            <div className="col">
              <h4 className="m-2 p-2">{product.title}</h4>
              <p className="text-sm-justify">{product.description}</p>
              <p className="price">₹ {product.price} only</p>
              <p>Rating: {product.rating.rate}</p>
              <p>In stock: {product.rating.count} left</p>
                <button className="btn btn-dark">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
