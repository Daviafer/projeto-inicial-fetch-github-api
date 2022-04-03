const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  repositories: [],
    // pegando dados da api e jogando nas variávias
  setInfo(gitHubUser){
    this.avatarUrl = gitHubUser.avatar_url
    this.name = gitHubUser.name
    this.bio = gitHubUser.bio
    this.userName = gitHubUser.login
  },
    // parte específica dos repositórios, por ser array e de outro endpoint
    setRepositories(repositories){
      this.repositories = repositories
  }
}
export { user }