import MyNavbar from "./MyNavbar";
import Header from "./Header";
import Footer from "./Footer";
import AllTheBooks from "../Books/AllTheBooks";
import ThemeContext from "./ThemeContext";
import React, { useState, useContext } from "react";

export default function Home() {
  //questo stato mi serve sia per l'header contenente la barra di ricerca sia per AllTheBooks che dovra filtrare i libri in base alla ricerca
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useContext(ThemeContext);

  const backgroundColor = theme === "light" ? "#7DC2AD" : "#5A8F7B";

  return (
    <div style={{ backgroundColor, width: "100%" }}>
      <MyNavbar setSearchTerm={setSearchTerm} />
      <Header />
      <AllTheBooks searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
