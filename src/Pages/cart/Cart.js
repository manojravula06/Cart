import { useState,useEffect} from "react";
import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";

function Cart() {
  const [items, setItems] = useState([]);
 
  const addToCart = (product) => {
    const newCartItems = [...items, product];
    setItems(newCartItems);
  };
const clearCart=()=>{
  setItems([])
}
  useEffect(()=>{
    console.log(items)
  },[])

  const renderComponent=()=>{
    return(
      <>
        <Navbar/>
       <div>
        {items.map((item)=>(<CartItem/>))}
        <CartItem image={'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg'}
        productName={'Mobile'}
        price={'100'}
        />
        <div>
          <button className="btn btn-light text-danger" onClick={clearCart}>clear cart</button>         
        </div>
      </div>
      </>
    )
  }
  return (
    renderComponent()
  );
}

export default Cart;
