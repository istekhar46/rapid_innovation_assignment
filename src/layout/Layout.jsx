import React from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import Router from "../routes/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
