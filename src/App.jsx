import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/inc/NavbarHeader';
import Login from './components/pages/Login';
import { Outlet, Link, useLoaderData, } from "react-router-dom";
import useToken from './components/inc/useToken';

export default function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    
    <div>
      <NavbarHeader/>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}


