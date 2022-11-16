import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Login = () => {
  const refForm = useRef(null)
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setForm(form => ({ ...form, [name]: value }))
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const form = new FormData(refForm.current)
    console.log(form)
    console.log(event)
  }

  return (
    <main>
      {/* <!-- Section --> */}
      <section className="vh-100 mt-6 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded p-4 p-lg-5 w-100">

                <div className="text-center text-md-center mb-4 mt-md-0 animate__animated animate__pulse">
                  <img src={'https://cdn-icons-png.flaticon.com/512/61/61457.png'} width={100} alt="lock image" />
                  {/* <p className="h3"></p> */}
                </div>

                <form ref={refForm} onSubmit={handleSubmitForm} className="mt-4">

                  <div className="form-group mb-4">
                    <div className="input-group">
                      <span className="input-group-text px-3" id="basic-addon1">
                        <i className="fas fa-user"></i>
                      </span>
                      <input value={form?.usuario || ''} onChange={handleChangeForm} type="text" className="form-control" placeholder="usuario" id="usuario" name="usuario" autoFocus required />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-group mb-4">
                      <div className="input-group">
                        <span className="input-group-text px-3" id="basic-addon2">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input value={form?.password || ''} onChange={handleChangeForm} autoComplete='off' type="text" placeholder="contraseña" className="form-control" id="password" name="password" required />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button disabled={false} type="submit" className="btn btn-dark">ingresar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login