import React from 'react'
import { Link } from 'react-router-dom'
import useSession from '../../../hooks/useSession'

const HeaderContent = () => {
  const { sessionLogout } = useSession()

  const handleLogout = () => {
    sessionLogout()
    window.location.href = "/"
  }

  return (
    <div className='d-flex flex-row'>
      <div className='w-100 justify-content-center align-self-center'>
        <h3 className='text-center'>Buscador</h3>
      </div>
      <div className='d-flex flex-row m-2 justify-content-between'>
        <Link to={'/upload'} className='btn btn-sm btn-primary mx-1 d-flex flex-row gap-2 align-items-center'>
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
          agregar
        </Link>
        <button onClick={handleLogout} className='btn btn-sm btn-secondary mx-1 d-flex flex-row gap-2 align-items-center'>
          <i className="fa-solid fa-door-open"></i>
          salir
        </button>
      </div>
    </div>
  )
}

export default HeaderContent