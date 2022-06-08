import logo from './logo.svg';
import './App.css';
import {LoginButton} from './components/Sidebar/Login'
import {LogoutButton} from './components/Sidebar/Logout';
import { Profile } from './components/Sidebar/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Table } from './components/Section/Table';
import { Orders} from './components/Section/Orders';
import data from "./components/data/data.json"
import React, { useState } from "react";
import { Resupply } from './components/Section/Resupply';

function App() {
  const {isAuthenticated}=useAuth0();
  
  const [products, setProducts]=useState(data);//initialization of the products in the json file
  localStorage.setItem('products', JSON.stringify(products));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header_title'>Inventory With React Js</h1>
      </header>
      <main>
        <aside>
          <img src={logo} className="App-logo" alt="logo" />
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>):(<LoginButton />)
          }
        </aside>
        <section>
         {isAuthenticated ? (
            <>
              <div className='table_container'>
                <Table/>
              </div>
              <Orders/>
              <Resupply/>
            </>):(<></>)
          }
        </section>
      </main>
    </div>
  );
}

export default App;