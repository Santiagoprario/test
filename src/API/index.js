
export const getDataFromApi = async (offset = 0, limit = 20) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit${limit}`)
  console.log(response)
  const data = await response.json()

  return data;
}