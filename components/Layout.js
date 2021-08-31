import React from "react";
import CreatorsList from "./CcreatorsProfile";
import Footer from "./Footer";
import Jumbotron from "./Hero";
import Navbar from "./Navbar";
import TubeOne from "./TubeOne";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {children}
        <Jumbotron />
        <CreatorsList />
        <TubeOne />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
