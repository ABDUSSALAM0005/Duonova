import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Services from '../pages/Services'
import Work from '../pages/Work'
import ErrorPage from "../pages/ErrorPage"
import Layout from "../components/Layout"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/work",
        element: <Work />,
      }
    ],
  },
])

export default function Navigation() {
  return <RouterProvider router={router} />
}