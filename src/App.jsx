import React from 'react'
import HeaderNavbar from './components/HeaderNavbar'
import AppRoutes from './router'

const App = () => {

  return (
    <div>
      <HeaderNavbar />
      <AppRoutes />
    </div>
  )
}

export default App