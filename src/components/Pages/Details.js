import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import NavbarItem from "../common/NavbarItem";

const Details = () => {
  const [Product, setProduct] = useState({});
  const { id } = useParams();

  const init = async () => {
    console.log(id);
  };

  useEffect(() => {
    init();
  }, []);
  const renderComponent = () => {
    return (
      <>
        <NavbarItem />
        <Container>
          {id}
          <Row>
            <Col>
              <img
                src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                alt="no img"
                style={{ width: "15rem" }}
                className="m-2"
              />
            </Col>
            <Col>
              <h4>Name of the product {id}</h4>
              <div className="text-start">
                <p>Description</p>
                <p>Rating</p>
                <p>Category</p>
                <h3 className="text-danger">Price</h3>
              </div>

              <Button className="rounded-4">Add to cart</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  return renderComponent();
};

export default Details;
