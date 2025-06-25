import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import AboutPage from './landing_page/about/AboutPage'
import Hero from './landing_page/products/Hero'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'

// ✅ Layout component including Navbar and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders the child route */}
      <Footer />
    </>
  )
}

// ✅ Router with layout route
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/signup', element: <Signup /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/products', element: <Hero /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/support', element: <SupportPage /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

export default function App() {
  return <RouterProvider router={appRouter} />
}
