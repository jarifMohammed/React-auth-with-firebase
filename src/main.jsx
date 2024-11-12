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

      },{
        path: '/',
        element: <Home></Home>

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
