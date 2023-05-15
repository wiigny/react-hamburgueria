import { Button } from "../Buttons/Button";

export const CartTotal = ({ total, removeAllCart }) => {
  return (
    <div id="totalPrice">
      <div>
        <p>Total</p>
        <span>R${total}</span>
      </div>
      <Button removeAllCart={removeAllCart} nameButton={"Remover todos"} />
    </div>
  );
};
