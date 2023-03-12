import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <button
        className="control has-text-white linkking"
        onClick={handleLogout}
        id="logoutButton"
      >
        <span className="text">Logout</span>
      </button>
    </>
  );
};

export default Logout;
