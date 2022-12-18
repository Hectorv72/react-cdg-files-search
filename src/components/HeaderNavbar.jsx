import React from 'react'
import useSession from '../hooks/useSession'
import imgHeader from '../images/header.png'

const HeaderNavbar = () => {
  const { sessionLogout, session } = useSession()

  const handleLogout = () => sessionLogout()

  return (
    <div className='d-flex flex-row justify-content-between p-1 shadow' style={{ backgroundColor: '#0074BD' }}>
      <div>
        <img className='my-1 ms-2 img-fluid' src={imgHeader} style={{ maxWidth: 240 }} />
      </div>
      {
        session &&
        <div className='d-flex align-items-center justify-content-end'>
          <button onClick={handleLogout} className='btn btn-sm btn-outline-light mx-1 d-flex flex-row gap-2 align-items-center'>
            <i className="fa-solid fa-door-open"></i>
            salir
          </button>
        </div>
      }
    </div>
  )
}

export default HeaderNavbar