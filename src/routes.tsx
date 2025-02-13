import { createBrowserRouter } from "react-router-dom";
import SplashScreen from "./shared/components/SplashScreen";
import Login from "./features/auth/Login";
import React from "react";
import Register from "./features/auth/Register";


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
  //   {
  //     path: "/dashboard",
  //     element: (
  //       <ProtectedRoute>
  //         <PeopleList />
  //       </ProtectedRoute>
  //     ),
  //   },
]);