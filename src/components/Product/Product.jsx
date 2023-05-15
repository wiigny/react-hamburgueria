import { Button } from "../Buttons/Button";

export const Product = ({ event, products }) => {
  return (
    <ul>
      {products.length > 0
        ? products.map((obj, key) => {
            return (
              <li key={key} id={obj.id}>
                <figure>
                  <img src={obj.img} alt={obj.name} />
                </figure>
                <div>
                  <h2>{obj.name}</h2>
                  <span>{obj.category}</span>
                  <p>R$ {obj.price.toFixed(2)}</p>
                  <Button
                    event={event}
                    products={products}
                    nameButton={"Adicionar"}
                  />
                </div>
              </li>
            );
          })
        : ""}
    </ul>
  );
};
