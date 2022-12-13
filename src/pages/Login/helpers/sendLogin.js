export default async (body) => {
  const info = { ok: false }
  const content = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body)
  }
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth`, content)
  const json = await response.json()
  info.ok = response.ok
  info.message = json?.message
  info.token = json?.token || null
  return info
}