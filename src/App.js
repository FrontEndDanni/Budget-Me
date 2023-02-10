import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
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
      path:"/",
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
  ])
  return (
  <div>
    <RouterProvider router={router} />
  </div>
)}

export default App