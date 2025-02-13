import { createBrowserRouter } from "react-router-dom";
import SplashScreen from "./shared/components/SplashScreen";
import Login from "./features/auth/Login";
import React from "react";
import Register from "./features/auth/Register";
import UserList from "./features/users/UserList";


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
    element: <UserList />
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