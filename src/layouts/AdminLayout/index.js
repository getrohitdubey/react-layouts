/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import Header from "./Header";
import Footer from "../../components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AdminLayout;
