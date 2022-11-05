import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartLogo from "../assets/AddtoCart.gif";
import "../css/CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../store/cart-slice";
// import { modalActions } from "../store/modal-slice";

const CartItems = () => {
  let totalCartItemPrice = 0;
  const dispatch = useDispatch();

  //todo get the cartItems state from redux store
  const cartItems = useSelector((state) => state.cart.itemsList);

  //todo get the showCart state from redux store
  const ShowCart = useSelector((state) => state.cart.showCart);

  //todo to get the Total Price of all the items in the cart
  cartItems.forEach((i) => {
    totalCartItemPrice += i.totalPrice;
  });

  // if ismodalOpen is true then only open the modal otherwise stay close
  // const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  // const active = isModalOpen ? "is-active" : "";
  const active = ShowCart ? "is-active" : "";

  const handleModal = () => {
    // dispatch(modalActions.closeModal());
    dispatch(cartActions.setShowCart());
  };

  return (
    <>
      <div className={`modal ${active} animate__animated animate__fadeIn`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head has-background-dark">
            <p className="modal-card-title has-text-white">Your Cart</p>
            <button
              className="delete linkking"
              aria-label="close"
              onClick={handleModal}
            ></button>
          </header>

          {cartItems.length !== 0 ? (
            <>
              <section className="modal-card-body">
                <div className="columns" id="CartColumns">
                  {cartItems.map((ele) => (
                    <CartItem
                      id={ele.id}
                      name={ele.name}
                      key={ele.id}
                      quantity={ele.quantity}
                      price={ele.price}
                      total={ele.totalPrice}
                      imgURL={ele.imgURL}
                    />
                  ))}
                </div>
                <footer className="modal-card-footer">
                  <p className="is-size-5 has-text-weight-normal">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} size="lg" />
                    {"   "}
                    Total Price : $ {totalCartItemPrice}
                  </p>
                  <span className="linkking">
                    <FontAwesomeIcon icon={faBagShopping} size="lg" />
                    {"  "} Place Order
                  </span>
                </footer>
              </section>
            </>
          ) : (
            <section className="modal-card-body is-clipped">
              <div className="column">
                <div className="container has-text-centered">
                  <p>The Cart is Empty. Please Buy most of the Products.</p>
                  <img src={EmptyCartLogo} alt="EmptyCartLogo" />
                </div>
              </div>{" "}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItems;
