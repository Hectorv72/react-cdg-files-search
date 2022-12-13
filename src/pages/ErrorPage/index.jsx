import React from 'react'
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();

  // setTimeout(() => {
  //   window.location.href = "/"
  // }, 1500)

  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage