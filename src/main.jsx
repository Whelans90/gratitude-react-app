import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error-page";
import Home from "./components/pages/Home";
import ContactUs from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Preferences from './components/pages/Preferences';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "contact",
        element: <ContactUs/>,
      },
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "login",
        element:<Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: "prefrences",
        element: <Preferences/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

