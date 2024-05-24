
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('github-form')

  function handleForm() {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let ul = document.getElementById('user-list')
      ul.innerHTML = ''
      let reposList = document.getElementById('repos-list')
      reposList.innerHTML = ''
      let query = form.search.value
  
      fetch(`https://api.github.com/search/users?q=${query}`, {
        headers:
            {
            Accept: "application/vnd.github.v3+json"
          }
        })
        .then(res => res.json())
        .then(createUserCard)
    })
  }

  function createUserCard(users) {
    users.items.forEach(item => {   
      let ul = document.getElementById('user-list')
      let displayName = document.createElement('li')
      let profilePic = document.createElement('li')
      let profileLink = document.createElement('li')
      let img = document.createElement('img')
      let btn = document.createElement('button')

      btn.innerHTML = ` 
      <a href="${item.html_url}">Check me out</a>
      `
      profileLink.appendChild(btn)
      img.src = item.avatar_url
      displayName.innerText = item.login
      img.setAttribute('id', 'profile-pic')

      profilePic.appendChild(img)
      ul.appendChild(displayName)
      ul.appendChild(profilePic)
      ul.appendChild(profileLink)

      img.addEventListener('click', (e) => {
        fetch(`https://api.github.com/users/${item.login}/repos`, {
          headers:
              {
              Accept: "application/vnd.github.v3+json"
            }
          })
        .then(res => res.json())
        .then(repos => {
          repos.forEach(repo => {
            let reposList = document.getElementById('repos-list')
            let repoName = document.createElement('span')
            let repoUrl = document.createElement('span')
            let repoBox = document.createElement('li')

            repoBox.setAttribute('id', 'repo-box')
            repoName.innerHTML = `${repo.name}<br>`
            repoUrl.innerText = repo.html_url

            reposList.appendChild(repoBox)
            repoBox.appendChild(repoName)
            repoBox.appendChild(repoUrl)           
          })
        })   
      })
    })
  } 
  handleForm()  
})
