import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import Footer from "./Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="is-flex-direction-row ">
        <Header />
        <Products />
        <CartItems />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
