import React from "react";
import Header from "./Header";
import Products from "./Products";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMoneyCheckDollar,
//   faDollar,
// } from "@fortawesome/free-solid-svg-icons";
import CartItems from "./CartItems";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="is-flex-direction-row ">
        <Header />
        <Products />
        <CartItems />
      </div>
    </React.Fragment>
  );
};

export default Layout;
