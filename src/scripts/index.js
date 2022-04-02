// importando user
import { user } from '/src/scripts/services/user.js'
// importando repositories
import { repositories } from '/src/scripts/services/repositories.js'


// clique com botão ao pesquisar
document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  getUserProfile(userName)
})
// tecla ENTER ao pesquisar
document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    getUserProfile(userName)
  }
})

function getUserProfile(userName){
  user(userName).then(userData => {
    //console.log(userData)
    //avatar  //bio   //name
    let userInfo = 
        ` <div class="info">
            <img src="${userData.avatar_url} alt="Foto perfil usuário"/>
            <div class="data">
              <h1> ${userData.name ?? 'Não possui nome cadastrado :/'} </h1>
              <p> ${userData.bio ?? 'Não possui biografia cadastrado'}</p>
            </div>
          </div>`
    document.querySelector('.profile-data').innerHTML = userInfo
    //buscando repositórios do usuário pesquisado
    getUserRepositories(userName)
  })
}

function getUserRepositories(userName) {
  repositories(userName).then(reposData => {
  // percorrendo array, criando lista  
    let repositoriesItens = ""
    //lista
    reposData.forEach(repo => {
      repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a></li>`
    })
    //pegando dados li e jogando na ul
    document.querySelector('.profile-data').innerHTML += 
    `<div class="repositories section">
      <h2> Alguns repositórios</h2>
      <ul> ${repositoriesItens}</ul>
    </div>`
  })
}