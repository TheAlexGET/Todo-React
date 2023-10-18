import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading){
    return <Loader/>
  }
  return (
    <Routes>
      {isAuth
      ?
      privateRoutes.map((route) => (
        <Route
        key={route.path}
          element={route.component}
          path={route.path + String(route.exact)}
        ></Route>
      ))
      :
      publicRoutes.map((route) => (
        <Route
        key={route.path}
          element={route.component}
          path={route.path + String(route.exact)}
        ></Route>
      ))
      }
    </Routes>
  );
};

export default AppRouter;
