import { useState, useEffect } from "react";

import "./App.css";
import { Header } from "./Header";
import { ProductList } from "./ProductList";
import { LoadMoreButton } from "./LoadMoreButton";
import { BasketItem } from "./BasketItem";

const url = "https://kea-alt-del.dk/t7/api/products?start=";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch(`${url}${page * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles((oldData) => [...oldData, ...data]);
      });
  }, [page]);

  const [count, setCount] = useState(0);

  function addProduct(product) {
    console.log(`product`, product);
    setBasket((oldBasket) => oldBasket.concat(product));
    console.log(`Basket :`, basket);
  }

  function removeProduct(id) {
    console.log(id);
    setBasket((oldBasket) => oldBasket.filter((product) => product.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <ShoppingCart basket={basket} removeProduct={removeProduct} productCount={productCount} setProductCount={setProductCount} />
      {articles.length === 0 ? (
        <p>LOADING.........</p>
      ) : (
        <ProductList articles={articles} basket={basket} addProduct={addProduct} />
      )}

      <LoadMoreButton page={page} setPage={setPage} />
    </div>
  );
}

const [productCount, setProductCount] = useState(1);

function ShoppingCart(props) {
  return (
    <ul className="shopping_cart">
      <h3>Shopping cart</h3>

      {props.basket.map((product) => (
        <BasketItem
          product={product}
          removeProduct={props.removeProduct}
          productCount={props.productCount}
          setProductCount={props.setProductCount}
        ></BasketItem>
      ))}
    </ul>
  );
}

export default App;
