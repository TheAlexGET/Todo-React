import React from "react";
import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
        <Route path="/about">
          <About/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
