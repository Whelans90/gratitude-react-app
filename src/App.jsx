import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/inc/NavbarHeader';
import UsersTable from './components/pages/UsersTable';
import { Outlet, Link, useLoaderData, } from "react-router-dom";
import { getUsers } from './components/pages/Users';

export default function App() {
  return (
    
    <div>
      <NavbarHeader/>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}


