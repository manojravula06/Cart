import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Widgit from "../common/Widgit";
import fetchProducts from "../api/fetchProducts";
import NavbarItem from "../common/NavbarItem";

const WomenClothing = () => {
  const [womenData, setWomenData] = useState([]);

  useEffect(() => {
    Women();
  }, []);
  const Women = () => {
    fetchProducts()
      .then((res) => {
        setWomenData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavbarItem />
      <div className="container">
        <div className="m-2 row col-12">
          {womenData
            .filter((product) => product.category === "women's clothing")
            .map((product, id) => (
              <div className="my-2" style={{ width: 20 + "rem" }}>
                <Link
                  to={`${product.id}/details`}
                  style={{ textDecoration: "none", color: "black" }}
                  key={id}
                >
                  <Widgit
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WomenClothing;
