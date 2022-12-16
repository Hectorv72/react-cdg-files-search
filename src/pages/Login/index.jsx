import React, { useState } from 'react'
import useSession from '../../hooks/useSession'
import sendLogin from './helpers/sendLogin'

const Login = () => {
  const { sessionLogin } = useSession()
  const [form, setForm] = useState({})
  const [error, setError] = useState(null)

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setForm(form => ({ ...form, [name]: value }))
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    const { ok, message, token } = await sendLogin(form)
    if (ok) {
      sessionLogin(token)
      window.location.href = "/"
    } else {
      setError(message)
    }
  }

  return (
    <main>
      {/* <!-- Section --> */}
      <section className="vh-100 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded p-4 p-lg-5 w-100">

                <div className="text-center text-md-center mb-4 mt-md-0 animate__animated animate__pulse">
                  <img src={'https://cdn-icons-png.flaticon.com/512/61/61457.png'} width={100} alt="lock image" />
                  {/* <p className="h3"></p> */}
                </div>

                <form onSubmit={handleSubmitForm} className="mt-4" autoComplete='off'>

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
                        <input value={form?.password || ''} onChange={handleChangeForm} autoComplete='off' type="password" placeholder="contraseña" className="form-control" id="password" name="password" required />
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button disabled={false} type="submit" className="btn btn-dark">INGRESAR</button>
                  </div>
                  {
                    error &&
                    <div className='mt-3 alert alert-danger p-1 d-flex justify-content-center'>{error}</div>
                  }
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