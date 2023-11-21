import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./Components/Structure/ThemeContext";
import MyNavbar from "./Components/Structure/MyNavbar";
import Header from "./Components/Structure/Header";
import AllTheBooks from "./Components/Books/AllTheBooks";
import ReviewPage from "./Components/Structure/ReviewPage";
import Footer from "./Components/Structure/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./Components/Structure/NotFound";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState(""); // Stato spostato da Home

  function changeTheme() {
    setTheme((lastTheme) => (lastTheme === "light" ? "dark" : "light"));
  }

  const backgroundColor = theme === "light" ? "#7DC2AD" : "#5A8F7B";

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div style={{ backgroundColor, width: "100%" }}>
        <MyNavbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <AllTheBooks searchTerm={searchTerm} />
              </>
            }
          />
          <Route path="/review/:id" element={<ReviewPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
