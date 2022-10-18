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
        {/* <section className="section">
          <div className="container is-pulled-right">
            <div className="mb-6">
              <h3 className="title is-4">
                <FontAwesomeIcon icon={faMoneyCheckDollar} /> Total:{"  "}
                <FontAwesomeIcon icon={faDollar} />
                {"  "}
                100
              </h3>
              <button className="button is-success">Place Order</button>
            </div>
          </div>
        </section> */}
      </div>
    </React.Fragment>
  );
};

export default Layout;
