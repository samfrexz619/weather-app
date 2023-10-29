import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import './App.scss'




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
