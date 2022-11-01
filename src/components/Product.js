import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const clickAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
        imgURL,
      })
    );
  };
  return (
    <>
      <div className="column is-one-quarter-desktop is-half-tablet">
        <div className="card has-background-light" id="card">
          <div className="card-image">
            <figure className="image">
              <img src={imgURL} alt={name} />
            </figure>
          </div>
          <div className="has-text-centered">
            <p className="title is-size-6">{name}</p>
            <p>$ {price}</p>
          </div>
          <footer
            className="button card-footer has-background-dark "
            onClick={clickAddToCart}
            id="footerBtn"
          >
            <p className="card-footer-item">
              <span className="is-size-7 has-text-white">Add to Cart</span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Product;
