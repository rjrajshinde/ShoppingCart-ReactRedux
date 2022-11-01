import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
// import { modalActions } from "../store/modal-slice";

const Cart = () => {
  const dispatch = useDispatch();

  //todo get the total quantity from redux state cart
  const cartItems = useSelector((state) => state.cart.totalQuantity);

  const handleModal = () => {
    // dispatch(modalActions.openModal());
    dispatch(cartActions.setShowCart());
  };

  return (
    <>
      <button className="control" onClick={handleModal} id="cartButton">
        <span className="icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        <span className="">{cartItems} Items</span>
      </button>
    </>
  );
};

export default Cart;
