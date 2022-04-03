// importando do arquivo variables
import {baseUrl, repositoriesQuantity} from '/src/scripts/variables.js'

// Repositórios
async function getRepositories(userName) {
  const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
  return await response.json()
}

export {getRepositories}