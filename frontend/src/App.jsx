import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from './pages/landingpage';
import { Navbar } from './components/shared/Navbar'
import { Footer } from './components/shared/Footer'
import { Login } from './components/auth/login'
import { Signup } from "./components/auth/Signup"
import { Premium } from './components/premium'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "premium",
        element: <Premium />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;