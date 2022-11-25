import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import NavbarItem from "../common/NavbarItem";

function Home() {
  const navigate = useNavigate();

  const goToWomenClothing = (e) => {
    e.preventDefault();
    navigate(`/womenclothing`);
  };
  const goToMenClothing = (e) => {
    e.preventDefault();
    navigate(`/mensclothing`);
  };
  const goToElectronics = (e) => {
    e.preventDefault();
    navigate(`/electronics`);
  };
  const goToJewellery = (e) => {
    e.preventDefault();
    navigate(`/jewellery`);
  };
  return (
    <div>
      <NavbarItem />
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
          <Carousel.Item>
            <img
              src="https://i.pinimg.com/originals/88/d3/c8/88d3c815f5ffbfd4ab1b4d8f7d977385.jpg"
              alt="Men's clothing slide"
              style={{ height: 30 + "rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container>
        <Row>
          <Col>
          <Card
          className="m-2"
          style={{ width: "18rem" }}
          onClick={goToWomenClothing}
        >
          <Card.Img
            variant="top"
            src="https://3.imimg.com/data3/NP/HS/MY-810231/indian-ladies-suits-500x500.jpg"
          />
        </Card>
        </Col>
        <Col>
        <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuxNUMmR52RpzQlRkseIeZPOOZW43jfKBvleYxDGbQ_XEKMrjo8CQQRnqdny9fax6HbI&usqp=CAU"
          onClick={goToMenClothing}
        />
      </Card>
      </Col>
      <Col>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://img.indiafilings.com/learn/wp-content/uploads/2017/07/12004011/mech-elect-appliances.jpg"
          onClick={goToElectronics}
        />
      </Card>
      </Col>
      <Col>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GfjCKO_Ie1BUTi8Fp4Z_g6WHdspeNLBQW10zV6dfqd-GdQxOse0r8bK499OkT5NpYDY&usqp=CAU"
          onClick={goToJewellery}
        />
      </Card>
      </Col>
        
      </Row>
      </Container>

  
    </div>
  );
}

export default Home;
