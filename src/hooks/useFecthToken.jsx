import useSession from './useSession'

const useFecthToken = () => {
  const { session } = useSession()

  const initContent = {
    headers: {
      'Auth-Token': session,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
  }

  const method = {}

  const sendFetch = async (route, content) => {
    const response = await fetch(import.meta.env.VITE_SERVER_URL + route, content)
    const { ok, status } = response
    const data = await response.json()
    return { ok, status, data }
  }

  method.get = async (route) => {
    return await sendFetch(route, { ...initContent, method: 'GET' })
  }

  method.post = async (route, body) => {
    return await sendFetch(route, { ...initContent, method: 'POST', body: JSON.stringify(body) })
  }

  method.put = async (route, body) => {
    return await sendFetch(route, { ...initContent, method: 'PUT', body: JSON.stringify(body) })
  }

  method.delete = async (route, body) => {
    return await sendFetch(route, { ...initContent, method: 'DELETE', body: JSON.stringify(body) })
  }

  return method

}

export default useFecthToken