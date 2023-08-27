import Header from "./components/header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useState } from "react";
import data from "./components/data";
function App() {
  const [foods, setFoods] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [quantities, setQuantities] = useState({});
  return (
    <>
      <div>
        <Header
          cartItems={cartItems}
          quantities={quantities}
          setCartItems={setCartItems}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        <Banner />
        <Cards />
        <Menu
          quantities={quantities}
          setQuantities={setQuantities}
          foods={foods}
          cartItems={cartItems}
          setFoods={setFoods}
          setCartItems={setCartItems}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
