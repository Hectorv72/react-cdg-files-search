import { useState } from "react"

const useSession = () => {
  const storageToken = localStorage.getItem('token')
  const [session, setSession] = useState(storageToken || null)

  const sessionLogin = (token) => {
    localStorage.setItem('token', token)
    setSession(token)
    window.location.href = "/"
  }

  const sessionLogout = () => {
    localStorage.removeItem('token')
    setSession(null)
    window.location.href = "/"
  }

  return ({ session, sessionLogin, sessionLogout })

}

export default useSession