import { toast } from 'sonner'

export async function getDigimonList () {
  try {
    const response = await fetch('https://digi-api.com/api/v1/digimon?pageSize=250')
    if (!response.ok) throw new Error('Error al obtener la lista de digimon.')

    const { content } = await response.json()
    return content
  } catch (error) {
    toast.error(error.message)
  }
}

export async function getDigimonDetail (id) {
  try {
    const response = await fetch(`https://digi-api.com/api/v1/digimon/${id}`)
    if (!response.ok) throw new Error(`Error al obtener el detalle del digimon con id: ${id}.`)

    const data = await response.json()
    return data
  } catch (error) {
    toast.error(error.message)
  }
}
