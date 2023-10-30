import MyNavbar from "./MyNavbar";
import Header from "./Header";
import Footer from "./Footer";
import AllTheBooks from "../Books/AllTheBooks";

import React from "react";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#7DC2AD", width: "100%", height: "100%" }}>
      <MyNavbar />
      <Header />
    </div>
  );
}
