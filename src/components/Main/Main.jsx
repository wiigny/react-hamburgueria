import { useState } from "react";
import { Aside } from "../Aside/Aside";
import { Container } from "./MainStyled";
import { ProductList } from "../ProductList/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, products) => {
    if (!cart.some((elt) => elt.id === +id)) {
      setCart((previus) => [
        ...previus,
        products.find((elt) => elt.id === +id),
      ]);
    } else {
      toast("Produto já foi adicionado");
    }
  };
  const removeToCart = (id) => {
    setCart(cart.filter((elt) => elt.id !== +id));
  };
  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <main>
      <Container>
        <ProductList products={products} event={addToCart} />
        <Aside
          cart={cart}
          removeAllCart={removeAllCart}
          removeToCart={removeToCart}
        />
      </Container>
      <ToastContainer />
    </main>
  );
};
