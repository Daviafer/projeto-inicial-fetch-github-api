document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  getUserProfile(userName)
})
// tecla ENTER
document.getElementById('input-search').addEventListener('keyup', (e) => {
  const userName = e.target.value
  const key = e.which || e.keyCode
  const isEnterKeyPressed = key === 13

  if (isEnterKeyPressed) {
    getUserProfile(userName)
  }
})

async function user(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`)
  return await response.json()
}

function getUserProfile(userName){
  user(userName).then(userData => {
    console.log(userData)
    //avatar  //bio   //name
    let userInfo = 
        `<img src="${userData.avatar_url} alt="Foto perfil usuário"/>
        <div class="data">
          <h1> ${userData.name ?? 'Não possui nome cadastrado :/'} </h1>
          <p> ${userData.bio ?? 'Não possui biografia cadastrado'}</p>
        </div>`
    document.querySelector('.profile-data').innerHTML = userInfo
  })
}