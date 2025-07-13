import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Summary from "./components/Summary";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import Signup from "./components/signup";
import Signin from "./components/signin";

// build router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,       // Home layout has TopBar
    children: [
      {
        path: "/",          // default route inside Home
        element: <Dashboard />,  // Dashboard layout has WatchList etc.
        children: [
          { index: true, element: <Summary /> }, // path="/" shows Summary
          { path: "/orders", element: <Orders /> },
          { path: "/holdings", element: <Holdings /> },
          { path: "/funds", element: <Funds /> },
          { path: "/apps", element: <Apps /> },
        ]
      }
    ]
  },

  {
    path : "/signup",
    element : <Signup/>
  },

  {
    path : "/signin",
    element : <Signin/>
  }
]);


export default function App() {
  return <RouterProvider router={appRouter} />
}
