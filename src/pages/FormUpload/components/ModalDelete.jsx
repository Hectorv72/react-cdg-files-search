import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import useFecthToken from '../../../hooks/useFecthToken'
import FormContext from '../contexts/FormContext'

const ModalDelete = () => {
  const fetchToken = useFecthToken()
  const { prevFileName, form, showModal, handleHideModal } = useContext(FormContext)
  const [fileName, setFileName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSetFileName = ({ target }) => {
    const { value } = target
    setFileName(value)
  }

  const handleSendDelete = async () => {
    try {
      setLoading(true)
      const { ok, data } = await fetchToken.delete('/file', { id: form._id })
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal show={showModal} onHide={handleHideModal}>
      <Modal.Header closeButton>Eliminar Archivo</Modal.Header>
      <Modal.Body>
        <div>Para eliminar el archivo escribe:</div>
        <strong>{prevFileName}</strong>
        <input type='text' value={fileName} className='form-control' onChange={handleSetFileName} />
        <div className='my-2 d-flex justify-content-center'>
          <Button variant='outline-danger' onClick={handleSendDelete} disabled={prevFileName !== fileName || loading} >
            <i className="fa-solid fa-trash me-2"></i>
            Eliminar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalDelete