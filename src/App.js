import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Structure/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
