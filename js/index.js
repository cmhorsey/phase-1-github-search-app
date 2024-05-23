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

          img.src = item.avatar_url
          displayName.innerText = item.login
          profileLink.innerText = item.html_url

          profilePic.appendChild(img)
          ul.appendChild(displayName)
          ul.appendChild(profilePic)
          ul.appendChild(profileLink)
        });
      })
  })
})
