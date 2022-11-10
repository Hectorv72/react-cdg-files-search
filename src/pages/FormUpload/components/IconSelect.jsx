import React, { useState } from 'react'

const IconSelect = ({ icon, name }) => {

  const [clicked, setClicked] = useState(false)

  return (
    <button onClick={() => setClicked(!clicked)} className={`btn btn-sm btn-${clicked ? '' : 'outline-'}dark d-flex justify-content-center align-items-center`} style={{ width: 32, height: 32 }}>
      <i className={icon} style={{ fontSize: 18 }} />
      {/* <div>{name}</div> */}
    </button>
  )
}

export default IconSelect