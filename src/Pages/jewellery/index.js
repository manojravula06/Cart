import ProductCard from "../../components/ProductCard";
import NavbarComponent from "../../components/Navbar";

const Jewellery = () => {


  return (
    <>
      <div>
        <NavbarComponent/>
          <h1 className="display-1">Jewellery</h1>
          <ProductCard/>
      </div>
    </>
  );
};

export default Jewellery;
