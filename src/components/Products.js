import React from "react";
import Product from "./Product";
import "../css/Product.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Cortardo Cup",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p1.png?raw=true",
    price: 25,
  },
  {
    id: 2,
    name: "Docker Light",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p2.png?raw=true",
    price: 25,
  },
  {
    id: 3,
    name: "Coffee Crush",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p3.png?raw=true",
    price: 25,
  },
  {
    id: 4,
    name: "Black Coffee",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p1.png?raw=true",

    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p2.png?raw=true",
    price: 25,
  },
  {
    id: 6,
    name: "Acer Aspire",
    imgURL:
      "https://github.com/iamshaunjp/bulma-ui-build/blob/lesson-12/assets/p3.png?raw=true",
    price: 25,
  },
];

const Products = () => {
  return (
    <section className="section">
      <div className="container is-max-widescreen">
        <h3 className="title has-text-centered is-size-3">Products</h3>
        <div className="columns is-multiline">
          {DUMMY_PRODUCTS.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
