import { getDigimonDetail } from '@/services/digimonFetchData'
import { useEffect, useState } from 'react'

export const useGetDigimonById = id => {
  const [digimon, setDigimon] = useState(null)

  useEffect(() => {
    getDigimonDetail(id).then(data => setDigimon(data))
  }, [id])

  return digimon
}
