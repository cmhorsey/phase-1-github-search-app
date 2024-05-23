//Grab form
//On submit
//Prevent Default
//Create 3 list items
//Name, Picture, Button link to profile
//Append to UL
//Make GET request grabbing the targetvalue of the form
//Grab correct field info to populate form




document.addEventListener('DOMContentLoaded', () => {


  let form = document.getElementById('github-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let ul = document.getElementById('user-list')
    ul.innerHTML = ''
    let query = form.search.value

    fetch(`https://api.github.com/search/users?q=${query}`, {
      headers:
          {
          Accept: "application/vnd.github.v3+json"
        }
      })
      .then(res => res.json())
      .then(users => {
        console.log(users.items)
        users.items.forEach(item => {   
          let ul = document.getElementById('user-list')
          let displayName = document.createElement('li')
          let profilePic = document.createElement('li')
          let profileLink = document.createElement('li')
          let img = document.createElement('img')
          let btn = document.createElement('button')

          

          img.src = item.avatar_url
          displayName.innerText = item.login
          profileLink.innerHTML = `
          <a href="${item.html_url}">Check me out</a>
          `

          img.setAttribute('id', 'profile-pic')

          profilePic.appendChild(img)
          ul.appendChild(displayName)
          ul.appendChild(profilePic)
          ul.appendChild(profileLink)

          //add an invent listener to img
          //on click
          //get request to https://api.github.com/users/${item.login}/repos
          //forEach repo
          //create 

          img.addEventListener('click', (e) => {
            // console.log(item.login)
            fetch(`https://api.github.com/users/${item.login}/repos`, {
              headers:
                  {
                  Accept: "application/vnd.github.v3+json"
                }
              })
            .then(res => res.json())
            .then(repos => {
              repos.forEach(repo => {
                console.log(repo.name)
                console.log(repo.html_url)

              })
            })
            

          })

        })
      })


  })
})
