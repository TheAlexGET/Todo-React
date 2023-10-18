import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: '/*'},
    {path: '/posts', component: <Posts/>, exact: '/*'},
    {path: '/error', component: <Error/>, exact: '/*'},
    {path: '/posts/:id', component: <PostIdPage/>, exact: '/*'},
    {path: '*', component: <Navigate to={'/posts'}/>, exact: ''},
]

export const publicRoutes = [
    {path: '/about', component: <About/>, exact: '/*'},
    {path: '/error', component: <Error/>, exact: '/*'},
    {path: '/login', component: <Login/>, exact: '/*'},
    {path: '*', component: <Navigate to={'/login'}/>, exact: ''},
]
