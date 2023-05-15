import { useEffect, useState } from "react";
import { GlobalStyle } from "./App";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { getProducts } from "./services/Axios/Get";

function App() {
  const [products, setProducts] = useState([]);

  const [listFiltered, setListFiltered] = useState(products);

  const [render, setRender] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const response = (data) => {
      setProducts(data);
    };
    const error = (err) => {
      console.log(err);
    };

    getProducts(response, error);
  }, []);

  useEffect(() => {
    setListFiltered(
      products.filter((elt) =>
        elt.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const filter = (e) => {
    e.preventDefault();
    if (search) {
      setRender(true);
    } else {
      setRender(false);
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header setSearch={setSearch} filter={filter} />
      <Main products={render ? listFiltered : products} />
    </div>
  );
}

export default App;
