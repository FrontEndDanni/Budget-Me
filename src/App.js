import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/home",
      element:<Homepage/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/",
      element:<LandingPage/>
    },
  ])
  return (
  <div>
    <RouterProvider router={router} />
  </div>
)}

export default App