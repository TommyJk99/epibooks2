import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Structure/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewPage from "./Components/Structure/ReviewPage";
import { useState } from "react";
import ThemeContext from "./Components/Structure/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review/:id" element={<ReviewPage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
