import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import FormUpload from '../pages/FormUpload';
import Login from '../pages/Login';
import Searcher from '../pages/Searcher';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Searcher />
  },
  {
    path: '/upload',
    element: <FormUpload />
  },
  {
    path: '/login',
    element: <Login />
  }
])

const AppRoutes = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default AppRoutes