// importando user
import { getUser } from '/src/scripts/services/user.js'
// importando repositories
import { getRepositories } from '/src/scripts/services/repositories.js'
// importantdo de objects
import { user } from '/src/scripts/objects/user.js'
// importando o screen - informaçoes tela
import { screen } from '/src/scripts/objects/screen.js'

// clique com botão ao pesquisar
document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  // validação campo
  if(validateEmptyInput(userName)) return

  getUserData(userName)
})
// tecla ENTER ao pesquisar
document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13
  
  if (isEnterKeyPressed) {
    //validando vampo
    if(validateEmptyInput(userName)) return
    
    getUserData(userName)
  }
})

// função da validação campo
function validateEmptyInput(userName) {
  if (userName.length === 0) {
    alert('Preencha o campo com o nome do usuário do GitHub.')
    return true
  }
}

async function getUserData(userName){
  
  const userResponse = await getUser(userName)

  // USUÁRIO NÃO ENCONTRADO
  if (userResponse.message === "Not Found") {
    screen.renderNotFound()
    // parando o processo caso não seja encontrado
    return
  }

  const repositoriesResponse = await getRepositories(userName)
  
  user.setInfo(userResponse)
  user.setRepositories(repositoriesResponse)

  screen.renderUser(user)
}



// ----------------------------------------------------
// função foi substituida pelo método screen
// ----------------------------------------------------

// function getUserRepositories(userName) {
//   getRepositories(userName).then(reposData => {
//   // percorrendo array, criando lista  
//     let repositoriesItens = ""
//     //lista
//     reposData.forEach(repo => {
//       repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a></li>`
//     })
//     //pegando dados li e jogando na ul
//     document.querySelector('.profile-data').innerHTML += 
//     `<div class="repositories section">
//       <h2> Alguns repositórios</h2>
//       <ul> ${repositoriesItens}</ul>
//     </div>`
//   })
// }