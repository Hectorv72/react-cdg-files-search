import useSession from './useSession'

const useFecthToken = () => {
  const { session } = useSession()

  const content = {
    headers: {
      'Auth-Token': session,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
  }

  const method = {}

  method.get = async (route) => {
    content.method = 'GET'
    const response = await fetch(import.meta.env.VITE_SERVER_URL + route)
    const { ok, status } = response
    const data = await response.json()
    return { ok, status, data }
  }

  method.post = async (route, body) => {
    content.method = 'POST'
    content.body = JSON.stringify(body)
    const response = await fetch(import.meta.env.VITE_SERVER_URL + route, content)
    const { ok, status } = response
    const data = await response.json()
    return { ok, status, data }
  }

  return method

}

export default useFecthToken