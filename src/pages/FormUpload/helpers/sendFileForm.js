export default async (form) => {
  let info = { ok: true }
  try {
    const content = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(form)
    }
    const response = await fetch('http://localhost:4000/file', content)
    const json = await response.json()
    info.response = response
    info.ok = response.ok
    info.message = json?.message
    info.json = json
  } catch (error) {
    info.ok = false
    info.message = 'Ocurrió un error al enviar los datos, vuelva a intentarlo mas tarde'
    console.log('error =>', error)
  }
  return info
}