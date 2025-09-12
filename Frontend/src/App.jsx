import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./Components/Home";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Login from "./pages/Login";

function App() {
  const router=createBrowserRouter([
    {
      path:"/api/Register",
      element:<Register></Register>,
    },
    {
      path:"/api/Login",
      element:<Login/>,
    },
    {
      path:"/api/create",
      element:<Form/>,
    },
    {
      path:"/api/Home",
      element:<Home/>,
    },
  ]);
  return <RouterProvider router={router}/>
    }

export default App

