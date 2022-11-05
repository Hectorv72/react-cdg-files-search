import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: '/'
  }
])

const index = () => {
  return (
    <div>index</div>
  )
}

export default index