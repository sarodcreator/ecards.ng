import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from './pages/landingpage';
import { Navbar } from './components/shared/Navbar'
import { Footer } from './components/shared/Footer'


const appRouter = createBrowserRouter([
  {
    path: '/',
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
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;