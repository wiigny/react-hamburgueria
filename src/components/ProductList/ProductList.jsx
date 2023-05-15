import { Product } from "../Product/Product";

export const ProductList = ({ event, products }) => {
  return (
    <section>
      <Product products={products} event={event} />
    </section>
  );
};
