export const Button = ({
  type,
  nameButton,
  event,
  removeAllCart,
  removeToCart,
  products,
}) => {
  return (
    <button
      onClick={
        event
          ? (e) => event(e.target.parentNode.parentNode.id, products)
          : removeToCart
          ? (e) => removeToCart(e.target.parentNode.id)
          : removeAllCart
      }
      type={type}
    >
      {nameButton}
    </button>
  );
};
