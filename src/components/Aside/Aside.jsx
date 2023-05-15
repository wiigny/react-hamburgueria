import { AsideStyled } from "./AsideStyled";
import { CartTotal } from "../CartTotal/CartTotal";
import { ListCart } from "../ListCart/ListCart";

export const Aside = ({ cart, removeToCart, removeAllCart }) => {
  const priceList = () => {
    const total = cart.reduce((acc, cur) => acc + cur.price, 0);
    return total.toFixed(2);
  };

  return (
    <AsideStyled>
      <h2>Carrinho de compras</h2>
      <ListCart cart={cart} removeToCart={removeToCart} />
      {cart.length > 0 ? (
        <CartTotal removeAllCart={removeAllCart} total={priceList()} />
      ) : (
        <div id="emptyCart">
          <h3>Sua sacola está vázia</h3>
          <p>Adicione itens</p>
        </div>
      )}
    </AsideStyled>
  );
};
