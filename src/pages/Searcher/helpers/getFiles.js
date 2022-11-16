export default async () => {
  let info = { ok: true }
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/file`)
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