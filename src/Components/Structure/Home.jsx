import MyNavbar from "./MyNavbar";
import Header from "./Header";
import Footer from "./Footer";
import AllTheBooks from "../Books/AllTheBooks";

import React, { useState } from "react";

export default function Home() {
  //questo stato mi serve sia per l'header contenente la barra di ricerca sia per AllTheBooks che dovra filtrare i libri in base alla ricerca
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div style={{ backgroundColor: "#7DC2AD", width: "100%" }}>
      <MyNavbar />
      <Header setSearchTerm={setSearchTerm} />
      <AllTheBooks searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
