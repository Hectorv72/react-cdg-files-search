import React from 'react'
import { useNavigate } from 'react-router-dom'

const RowActions = ({ row }) => {
  const { _id } = row
  const navigate = useNavigate()
  return (
    <>
      <div>
        <button className='btn' onClick={() => navigate(`/upload/${_id}`)}><i className="fa-solid fa-pencil"></i></button>
      </div>
    </>
  )
}

export default RowActions