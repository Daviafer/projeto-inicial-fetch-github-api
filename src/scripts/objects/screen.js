const screen = {
  userProfile: document.querySelector('.profile-data'),
  // método para mostrar na tela. Renderizar
  renderUser(user){
    //avatar  //bio   //name
    this.userProfile.innerHTML = 
        ` <div class="info">
            <img src="${user.avatarUrl} alt="Foto perfil usuário"/>
            <div class="data">
              <h1> ${user.name ?? 'Não possui nome cadastrado :/'} </h1>
              <p> ${user.bio ?? 'Não possui biografia cadastrado'}</p>
            </div>
          </div>`
    
    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a></li>`)
    // console.log(repositoriesItens) 

    if(user.repositories.length > 0){
      this.userProfile.innerHTML += 
      `<div class="repositories section">
        <h2>Alguns respositórios</h2>
        <ul> ${repositoriesItens}</ul>
      </div>`
    }
  },
  // NÃO ENCONTRADO
  renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
  }
} 
export { screen }