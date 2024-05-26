export const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key) || null
}

export const addItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}
