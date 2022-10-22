import React from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Banner from "../components/Banner";
const Layout = (props) => {
  return (
    <div className="pageLayout">
      <Header />
      <main className="contentWrapper">
        <Banner width={940} height={120} />
        {props.children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
