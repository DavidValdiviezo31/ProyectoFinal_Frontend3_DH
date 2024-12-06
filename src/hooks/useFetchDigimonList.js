import { getDigimonList } from '@/services/digimonFetchData'
import { useEffect, useState } from 'react'

export const useFetchDigimonList = () => {
  const [digimonList, setDigimonList] = useState([])

  useEffect(() => {
    getDigimonList().then(data => setDigimonList(data))
  }, [])

  return { digimonList }
}
