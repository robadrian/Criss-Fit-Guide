import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./HomePage/Home";
import Login from "./LoginPage/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Criss-Fit-Guide/" element={<Home />} />
        <Route path="/Criss-Fit-Guide/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
