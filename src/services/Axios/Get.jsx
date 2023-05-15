import axios from "axios";

export const getProducts = async (responseProducts, error) => {
  const baseURL =
    "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

  try {
    const response = await axios.get(baseURL);

    responseProducts(response.data);
  } catch (err) {
    error(err);
  }
};
