import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useSession from '../hooks/useSession';
import ErrorPage from '../pages/ErrorPage';
import FormUpload from '../pages/FormUpload';
import Login from '../pages/Login';
import Searcher from '../pages/Searcher';

const loguedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Searcher />,
    errorElement: <ErrorPage />
  },
  {
    path: '/upload',
    element: <FormUpload />,
    errorElement: <ErrorPage />
  },
])

const logoutRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />
  },
])

const AppRoutes = () => {
  const { session } = useSession()

  return (
    <RouterProvider router={session ? loguedRoutes : logoutRoutes} />
  )
}

export default AppRoutes