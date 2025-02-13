import { createBrowserRouter } from "react-router-dom";
import SplashScreen from "./shared/components/SplashScreen";
import Login from "./features/auth/Login";
import React from "react";
import Register from "./features/auth/Register";
import Users from "./features/users/Users";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/users",
    element: <Users />
  }
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <ProtectedRoute>
  //         <PeopleList />
  //       </ProtectedRoute>
  //     ),
  //   },
]);