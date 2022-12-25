import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useFecthToken from '../../../hooks/useFecthToken'
import FormContext from '../contexts/FormContext'

const ModalDelete = () => {
  const fetchToken = useFecthToken()
  const navigate = useNavigate()
  const { prevFile, form, showModal, handleHideModal } = useContext(FormContext)
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSetFileName = ({ target }) => {
    const { value } = target
    setFileName(value)
  }

  const handleSendDelete = async (event) => {
    event.preventDefault()
    if (prevFile.filename === fileName) {
      try {
        setLoading(true)
        const { ok } = await fetchToken.delete('/file', { id: form._id })
        ok && navigate('/')
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Modal show={showModal} onHide={handleHideModal}>
      <Modal.Body>
        <div className='text-end'>
          <button className='btn-close' onClick={handleHideModal} />
        </div>
        <div>Para eliminar el archivo escribe:</div>
        <strong>{prevFile.filename}</strong>
        <form onSubmit={handleSendDelete}>
          <input type='text' value={fileName} className='form-control mt-2' onChange={handleSetFileName} />
          <div className='my-2 d-flex justify-content-center'>
            <Button type='submit' variant='outline-danger' disabled={prevFile.filename !== fileName || loading} >
              <i className="fa-solid fa-trash me-2"></i>
              {loading ? 'Eliminando...' : 'Eliminar'}
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDelete