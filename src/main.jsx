import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx';
import RestraurantMenu from './components/RestaurantMenu.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import Error from './components/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restaurant/:id',
        element: <RestraurantMenu />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routerConfig}>

  </RouterProvider>
)
