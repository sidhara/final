import logo from './logo.svg';
import './App.css';
import {LoginButton} from './components/Sidebar/Login'
import {LogoutButton} from './components/Sidebar/Logout';
import { Profile } from './components/Sidebar/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Table } from './components/Section/Table';

function App() {
  const {isAuthenticated}=useAuth0();
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
              <div className='orders'>

              </div>
            </>):(<></>)
          }

        </section>
      </main>
    </div>
  );
}

export default App;
