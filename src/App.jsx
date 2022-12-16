import React from 'react'
import HeaderNavbar from './components/HeaderNavbar'
import AppRoutes from './router'

const App = () => {

  return (
    <div style={{ backgroundColor: '#F6F9FF' }}>
      <HeaderNavbar />
      <AppRoutes />
    </div>
  )
}

export default App