import { getDigimonDetail } from '@/services/digimonFetchData'
import { useEffect, useState } from 'react'

export const useFetchtDigimonById = id => {
  const [digimonDetail, setDigimonDetail] = useState(null)

  useEffect(() => {
    getDigimonDetail(id).then(data => setDigimonDetail(data))
  }, [id])

  return { digimonDetail }
}
