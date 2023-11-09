import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import './App.scss'
import Weather from './pages/Weather'
import About from './pages/About'
import Layout from './pages/Layout'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout  />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/weather',
        element: <Weather />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
