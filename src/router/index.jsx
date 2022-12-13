import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':file',
        element: <FormUpload />,
      }
    ]
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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={session ? loguedRoutes : logoutRoutes} />
    </QueryClientProvider>
  )
}

export default AppRoutes