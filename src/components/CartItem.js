import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ name, quantity, total, price, id, imgURL }) => {
  const dispatch = useDispatch();

  const addCartItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        imgURL,
      })
    );
  };

  const reduceCartItemHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <div className="column">
        <div className="card equal-height">
          <div className="notification">
            <div className="card-image has-text-centered">
              <figure className="image is-128x128 is-inline-block">
                <img src={imgURL} alt={name} />
              </figure>
            </div>
            <div className="card-content has-text-centered mt-2">
              <p className="title is-size-5 has-text-weight-bold">{name}</p>

              <p>
                Price : <span className="has-text-weight-bold">$ {price}</span>
              </p>
              <p>
                Quantity :{" "}
                <span className="has-text-weight-bold">{quantity}</span>
              </p>
              <p>
                Total Price :{" "}
                <span className="has-text-weight-bold">$ {total}</span>
              </p>
            </div>
            <footer className="card-footer">
              <div
                className="card-footer-item has-background-info is-clickable has-text-white is-size-5"
                onClick={addCartItemHandler}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div
                className="card-footer-item has-background-danger is-clickable has-text-white is-size-5"
                onClick={reduceCartItemHandler}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
