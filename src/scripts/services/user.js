// importando do arquivo variables
import {baseUrl} from '/src/scripts/variables.js'

// buscando dados iniciais 
async function getUser(userName) {
  const response = await fetch(`${baseUrl}/${userName}`)
  return await response.json()
}

//exportando
export { getUser }