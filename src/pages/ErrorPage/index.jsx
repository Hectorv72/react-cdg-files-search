import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate()

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
      <Button variant='outline-primary' onClick={() => navigate('/')}>Volver</Button>
    </div>
  )
}

export default ErrorPage