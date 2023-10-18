import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import './styles/css/style.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter></AppRouter>
    </BrowserRouter>
  );
}
export default App;