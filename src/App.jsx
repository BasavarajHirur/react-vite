import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={appStore}>
          <UserProvider>
            <Header />
            <Outlet />
          </UserProvider>
        </Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
