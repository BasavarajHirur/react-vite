import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './utils/userContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <UserProvider>
        <Header />
        <Outlet />
      </UserProvider>
    </div>
  )
}

export default App
