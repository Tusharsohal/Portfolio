import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";


function App() {
 return (
    <>
      <Navbar />
      <Home />
    </>
  );
}


export default App;
