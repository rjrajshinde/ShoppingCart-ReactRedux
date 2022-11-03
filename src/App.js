import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import "bulma/css/bulma.min.css";
import { useDispatch, useSelector } from "react-redux";
import Cursor from "./components/Cursor";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { alertActions } from "./store/alert.slice";

let stopFirstRenderUseEffect = true;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const alert = useAlert();

  const dispatch = useDispatch();
  const alertData = useSelector((state) => state.alert.alert);

  //? useEffect for sending requset to db to insert, update, detele data
  useEffect(() => {
    //todo to stop useEffect to rendering for the first time
    if (stopFirstRenderUseEffect) {
      stopFirstRenderUseEffect = false;
      return;
    }

    //* whatever the data is comming we are sending the request to the firebase live database with method put to insert it and if it is already present then update it
    const sendReq = async () => {
      //todo display alert before sending request
      dispatch(
        alertActions.showAlert({
          type: "info",
          message: "Sending Request. Please wait!",
        })
      );
      const res = await fetch(
        "https://shoppingcard-reactredux-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      //todo show alert after sending request with response from the request(firebase live db)
      dispatch(
        alertActions.showAlert({
          type: "success",
          message: "Sent Request to Database Successfully!",
        })
      );
    };

    sendReq().catch((err) => {
      dispatch(
        alertActions.showAlert({
          type: "error",
          message: "Sending Request Failed due to some reason!",
        })
      );
    });

    const showAlert = (type, message) => {
      // if (open && open != null) {
      if (type !== "success") {
        alert.error(message);
      } else if (type !== "error") {
        alert.success(message);
      } else if (type !== "success" && type !== "error") {
        alert.info(message);
      }
      // }
    };

    console.log("kinjoker", alertData);
    if (alertData) {
      showAlert(alertData.type, alertData.message);
    }
  }, [cart, alertData]);

  //? useEffect for showing alert component
  // useEffect(() => {
  //   //todo to stop useEffect to rendering for the first time
  //   if (stopFirstRenderUseEffect) {
  //     stopFirstRenderUseEffect = false;
  //     return;
  //   }
  //   const showAlert = (type, message) => {
  //     // if (open && open != null) {
  //     if (type !== "success") {
  //       alert.error(message);
  //     } else if (type !== "error") {
  //       alert.success(message);
  //     } else if (type !== "success" && type !== "error") {
  //       alert.info(message);
  //     }
  //     // }
  //   };

  //   console.log("kinjoker", alertData);
  //   if (alertData) {
  //     showAlert(alertData.type, alertData.message);
  //   }
  // }, [alertData]);

  return (
    <div className="App">
      <Cursor />
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
