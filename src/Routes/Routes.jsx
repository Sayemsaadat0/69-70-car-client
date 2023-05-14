import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut";
import Bookings from "../Pages/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/signup',
            element : <SignUp></SignUp>
        },
        {
            path : '/checkout/:id',
            element : <PrivateRoutes>
                <CheckOut></CheckOut>,
            </PrivateRoutes>,
            loader : ({params}) => fetch(`http://localhost:7979/services/${params.id}`)
        },
        {
            path : 'bookings',
            element : <PrivateRoutes>
                <Bookings></Bookings>
            </PrivateRoutes>
        }
      ]
    },
  ]);






  export default router