import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { getAllCategories } from "../../api/categories/index";
import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";
import "./index.css";
import { getAllProducts } from "../../api/products/Products";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState("");
  const [data, setData] = useState([]);

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
  const initialise = async () => {
    const category = await getAllCategories();
    const product = await getAllProducts();
    setData(product);
    setCategories(category);
    setIsLoading(false);
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="container-Fluid">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/ElectronicsAppliancesHero11392x464.jpg?rev=d9da0ba1972843e393f6311c3ec0a2a9&w=1392&hash=86BD8407B5E078D4E21613C435B52A4F"
              alt="First slide"
              style={{ height: 30 + "rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/2d/93/a8/2d93a8ddd0e2e26a82b8589ec4f1eaac.jpg"
              alt="second slide"
              style={{ height: 30 + "rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://www.thechoicefashions.com/slideshow/banner2.jpg"
              alt="third slide"
              style={{ height: 30 + "rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      {loading()}
      <Container>
        {!isLoading && (
          <>
            <Row>
              <Col>
                <Link to="/electronics" className="link">
                  <Card className="m-2" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://img.indiafilings.com/learn/wp-content/uploads/2017/07/12004011/mech-elect-appliances.jpg"
                    />
                    <div className="card-text text-uppercase">
                      {categories[0]}
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/jewellery" className="link">
                  <Card className="m-2" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GfjCKO_Ie1BUTi8Fp4Z_g6WHdspeNLBQW10zV6dfqd-GdQxOse0r8bK499OkT5NpYDY&usqp=CAU"
                    />
                    <div className="card-text text-uppercase">
                      {categories[1]}
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/men" className="link">
                  <Card className="m-2" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://i0.wp.com/www.society19.com/wp-content/uploads/2019/12/20191206_120849.jpg?fit=1243%2C932&ssl=1"
                    />
                    <div className="card-text text-uppercase">
                      {categories[2]}
                    </div>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/women" className="link">
                  <Card className="m-2" style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://3.imimg.com/data3/NP/HS/MY-810231/indian-ladies-suits-500x500.jpg"
                    />
                    <div className="card-text text-uppercase stretched-link">
                      {categories[3]}
                    </div>
                  </Card>
                </Link>
              </Col>
            </Row>
            <hr />
            <div className="text-lg-start text-sm-center">
              <span className="heading">Top Rated</span>
            </div>
            <div className="">
            <div className="top-rated p-2 m-3">
              {data.map((product) => {
              return (
                <>
                <Link to={`/details/${product.id}`} className="link">
                  <ProductCard
                    img={product.image}
                    price={product.price}
                    title={product.title}
                    category={product.category}
                   className=""/>
                </Link>
                </>
              );
            })}
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Home;
