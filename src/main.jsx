import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import './index.css'
import FirebaseProvider from './Provider/FirebaseProvider.jsx'
import Home from './pages/Home/Home.jsx'
import AllArtAllCraft from './pages/AllArtAllCraft.jsx'
import AddCraftItem from './pages/AddCraftItem.jsx'
import MyCraftItem from './pages/MyCraftItem.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import UpdateCraftItem from './components/UpdateCraftItem.jsx'
import DetailsCraftsItem from './components/DetailsCraftsItem.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/additem')
      },
      {
        path: '/allartallcraft',
        element: <AllArtAllCraft></AllArtAllCraft>,


      },
      {
        path: '/addCraftitem',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: '/mycraftitem',
        element: <PrivateRoute><MyCraftItem></MyCraftItem></PrivateRoute>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateItem/:id',
        element: <UpdateCraftItem></UpdateCraftItem>,
        loader: ({ params }) => fetch(`http://localhost:5000/additem/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <DetailsCraftsItem />,
        loader: ({ params }) => fetch(`http://localhost:5000/additem/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
