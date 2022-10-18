import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    // dispatch(cartActions.setShowCart());
  };

  return (
    <>
      <button
        className="control is-clickable has-text-white"
        onClick={handleModal}
        id="logoutButton"
      >
        {/* <span className="icon">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </span> */}
        <span className="text">Logout</span>
      </button>
    </>
  );
};

export default Logout;
