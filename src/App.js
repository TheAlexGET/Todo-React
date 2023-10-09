import React from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/css/style.css'
import Navbar from "./components/UI/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>} />
      <Route path="/error" element={<Error/>}></Route>
      <Route path="*" element={<Navigate to={'/error'}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;