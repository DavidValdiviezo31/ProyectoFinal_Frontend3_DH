export function saveFavsData (data) {
  localStorage.setItem('favs', JSON.stringify(data))
}

export function getFavsData (key) {
  return JSON.parse(localStorage.getItem('favs')) ?? []
}
