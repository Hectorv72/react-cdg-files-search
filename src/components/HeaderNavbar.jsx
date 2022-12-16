import React from 'react'
import useSession from '../hooks/useSession'
import imgHeader from '../images/header.png'

const HeaderNavbar = () => {
  const { sessionLogout, session } = useSession()

  const handleLogout = () => {
    sessionLogout()
    window.location.href = "/"
  }

  return (
    <div className='d-flex flex-row justify-content-between'>
      <div>
        <img className='my-1 ms-2' src={imgHeader} style={{ width: 400 }} />
      </div>
      {
        session &&
        <div className='d-flex align-items-center me-3'>
          <button onClick={handleLogout} className='btn btn-sm btn-secondary mx-1 d-flex flex-row gap-2 align-items-center'>
            <i className="fa-solid fa-door-open"></i>
            salir
          </button>
        </div>
      }
    </div>
  )
}

export default HeaderNavbar