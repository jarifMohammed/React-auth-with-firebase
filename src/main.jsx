import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./componenets/Root";
import Home from "./componenets/Home";
import Login from "./componenets/Login";
import Register from "./componenets/Register";
import AuthProvider from "./Providers/AuthProvider";
import Orders from "./componenets/Orders";
import PrivateRoute from "./Routes/PrivateRoute";
import Profile from "./componenets/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'login',
        element: <Login></Login>

      },{
        path: 'register',
        element: <Register></Register>

      },{
        path: '/',
        element: <Home></Home>

      },{
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>

      },
      {
        path: 'orders',
        element:<PrivateRoute> <Orders></Orders></PrivateRoute>

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
