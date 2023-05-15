import { Button } from "../Buttons/Button";

export const ListCart = ({ cart, removeToCart }) => {
  return (
    <ul id="listCart">
      {cart.map((elt, index) => (
        <li id={elt.id} key={index}>
          <div>
            <figure>
              <img src={elt.img} alt="" />
            </figure>
            <div>
              <h2>{elt.name}</h2>
              <span>{elt.category}</span>
            </div>
          </div>
          <Button removeToCart={removeToCart} nameButton={"Remover"} />
        </li>
      ))}
    </ul>
  );
};
