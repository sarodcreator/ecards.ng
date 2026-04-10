import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/landingpage';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
// import './styles/main.css';

const appRouter = createBrowserRouter([
  {
    path: '/' || '/home',
    element: <LandingPage />
  },
])

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
  )
}

export default App;