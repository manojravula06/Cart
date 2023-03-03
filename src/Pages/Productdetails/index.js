import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getSingleProduct } from "../../api/products/Products";
import {getCart} from "../../api/cart/index";
import Loading from "../../components/Loading";
import "./Productdetails.css";

const SingleProduct = () => {
  const naviget = useNavigate();
  const { productId: selectedPorduct } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item,setItem]=useState({})
  const [cart,setCart]=useState([])
  

  const initialize = async () => {
    const response = await getSingleProduct(selectedPorduct);
    setItem(response.data);
     setIsLoading(false);
  };
  const Addtocart = (product) => {
    product=item
      setCart(product)
        console.log(cart)
    };

    // const addToCart = (product) => {
    //   const newCartItems = [...items, product];
    //   setItems(newCartItems);
    // };
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
            {!isLoading && (
              <>
                <div className="col">
                  <img
                    src={item.image}
                    alt="img_missigng"
                    className="single_product"
                  />
                </div>
                <div className="col text-start m-2">
                  <div className="d-flex align-items-center">
                    <h4 className="text-justify m-2 p-2">{item.title}</h4>
                  </div>
                  <div className="col text-start">
                    <span className="m-2 fw-bold">
                      {}
                      Rating : {item.rating.rate}                 
                      </span>
                    <p className="p-2">{item.description}</p>
                    <div className="text-center">
                      <p className="price">Price: ₹ {item.price} only</p>
                      <button
                        className="btn btn-dark rounded-4"
                        onClick={Addtocart}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
