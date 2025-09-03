import React from 'react'
// Import React to build components

import ReactDOM from 'react-dom/client'
// Import ReactDOM for rendering the app in the browser

import './index.css'
// Import global styles for the project

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// Import necessary functions and components from react-router-dom
// - Route: defines individual routes
// - RouterProvider: provides routing context to the app
// - createBrowserRouter: creates a router for handling routes
// - createRoutesFromElements: allows creating routes using JSX elements

import Layout from './Layout.jsx'
// Layout component (likely has Navbar, Footer, and <Outlet /> for child routes)

import Home from './components/Home/Home.jsx'
// Home page component

import About from './components/About/About.jsx'
// About page component

import Contact from './components/Contact/Contact.jsx'
// Contact page component

import User from './components/User/User.jsx'
// User page component (dynamic route with :userid)

import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// Github page component and its data loader function (for fetching API data)


// Example of router setup using array-based routes (commented out):
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Router setup using JSX-based routes (current active approach)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Default child route - renders Home when path = "/" */}
      <Route path='' element={<Home />} />

      {/* About page route - renders About component at "/about" */}
      <Route path='about' element={<About />} />

      {/* Contact page route - renders Contact component at "/contact" */}
      <Route path='contact' element={<Contact />} />

      {/* Dynamic route for users - renders User component at "/user/:userid" */}
      <Route path='user/:userid' element={<User />} />

      {/* Github route with a data loader - renders Github component at "/github" */}
      <Route 
        loader={githubInfoLoader} 
        path='github' 
        element={<Github />} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the router to the entire app */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
