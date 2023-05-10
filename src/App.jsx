import React from "react"


import Navbar from './components/navbar/Navbar'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Footer from '../src/components/footer/Footer'
import * as Pages from './pages'
import './App.scss'

function App() {
  const { Add, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } = Pages
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/orders",
          element: <Orders />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return <RouterProvider router={router} />
}

export default App
