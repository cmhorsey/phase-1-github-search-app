//Grab form
//On submit
//Prevent Default
//Create 3 list items
//Name, Picture, Button link to profile
//Append to UL
//Make GET request grabbing the targetvalue of the form
//Grab correct field info to populate form




document.addEventListener('DOMContentLoaded', () => {
  
// const fakeData = [{
//   "id": 132935648,
//   "node_id": "MDEwOlJlcG9zaXRvcnkxMzI5MzU2NDg=",
//   "name": "boysenberry-repo-1",
//   "full_name": "octocat/boysenberry-repo-1",
//   "private": false,
//   "owner": {
//     "login": "octocat",
//     "id": 583231,
//     "node_id": "MDQ6VXNlcjU4MzIzMQ==",
//     "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/octocat",
//     "html_url": "https://github.com/octocat",
//     "followers_url": "https://api.github.com/users/octocat/followers",
//     "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//     "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//     "organizations_url": "https://api.github.com/users/octocat/orgs",
//     "repos_url": "https://api.github.com/users/octocat/repos",
//     "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/octocat/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "html_url": "https://github.com/octocat/boysenberry-repo-1",
//   "description": "Testing",
//   "fork": true,
//   "url": "https://api.github.com/repos/octocat/boysenberry-repo-1",
//   "forks_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/forks",
//   "keys_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/teams",
//   "hooks_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/hooks",
//   "issue_events_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/events",
//   "assignees_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/tags",
//   "blobs_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/languages",
//   "stargazers_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/stargazers",
//   "contributors_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/contributors",
//   "subscribers_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/subscribers",
//   "subscription_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/subscription",
//   "commits_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/merges",
//   "archive_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/downloads",
//   "issues_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/labels{/name}",
//   "releases_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/octocat/boysenberry-repo-1/deployments",
//   "created_at": "2018-05-10T17:51:29Z",
//   "updated_at": "2024-05-23T01:15:52Z",
//   "pushed_at": "2022-08-01T15:42:02Z",
//   "git_url": "git://github.com/octocat/boysenberry-repo-1.git",
//   "ssh_url": "git@github.com:octocat/boysenberry-repo-1.git",
//   "clone_url": "https://github.com/octocat/boysenberry-repo-1.git",
//   "svn_url": "https://github.com/octocat/boysenberry-repo-1",
//   "homepage": "",
//   "size": 4,
//   "stargazers_count": 230,
//   "watchers_count": 230,
//   "language": null,
//   "has_issues": false,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "has_discussions": false,
//   "forks_count": 13,
//   "mirror_url": null,
//   "archived": false,
//   "disabled": false,
//   "open_issues_count": 0,
//   "license": null,
//   "allow_forking": true,
//   "is_template": false,
//   "web_commit_signoff_required": false,
//   "topics": [],
//   "visibility": "public",
//   "forks": 13,
//   "open_issues": 0,
//   "watchers": 230,
//   "default_branch": "master"
// }, 
// {
//   "id": 18221276,
//   "node_id": "MDEwOlJlcG9zaXRvcnkxODIyMTI3Ng==",
//   "name": "git-consortium",
//   "full_name": "octocat/git-consortium",
//   "private": false,
//   "owner": {
//     "login": "octocat",
//     "id": 583231,
//     "node_id": "MDQ6VXNlcjU4MzIzMQ==",
//     "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/octocat",
//     "html_url": "https://github.com/octocat",
//     "followers_url": "https://api.github.com/users/octocat/followers",
//     "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//     "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//     "organizations_url": "https://api.github.com/users/octocat/orgs",
//     "repos_url": "https://api.github.com/users/octocat/repos",
//     "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/octocat/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "html_url": "https://github.com/octocat/git-consortium",
//   "description": "This repo is for demonstration purposes only.",
//   "fork": false,
//   "url": "https://api.github.com/repos/octocat/git-consortium",
//   "forks_url": "https://api.github.com/repos/octocat/git-consortium/forks",
//   "keys_url": "https://api.github.com/repos/octocat/git-consortium/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/octocat/git-consortium/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/octocat/git-consortium/teams",
//   "hooks_url": "https://api.github.com/repos/octocat/git-consortium/hooks",
//   "issue_events_url": "https://api.github.com/repos/octocat/git-consortium/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/octocat/git-consortium/events",
//   "assignees_url": "https://api.github.com/repos/octocat/git-consortium/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/octocat/git-consortium/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/octocat/git-consortium/tags",
//   "blobs_url": "https://api.github.com/repos/octocat/git-consortium/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/octocat/git-consortium/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/octocat/git-consortium/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/octocat/git-consortium/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/octocat/git-consortium/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/octocat/git-consortium/languages",
//   "stargazers_url": "https://api.github.com/repos/octocat/git-consortium/stargazers",
//   "contributors_url": "https://api.github.com/repos/octocat/git-consortium/contributors",
//   "subscribers_url": "https://api.github.com/repos/octocat/git-consortium/subscribers",
//   "subscription_url": "https://api.github.com/repos/octocat/git-consortium/subscription",
//   "commits_url": "https://api.github.com/repos/octocat/git-consortium/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/octocat/git-consortium/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/octocat/git-consortium/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/octocat/git-consortium/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/octocat/git-consortium/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/octocat/git-consortium/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/octocat/git-consortium/merges",
//   "archive_url": "https://api.github.com/repos/octocat/git-consortium/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/octocat/git-consortium/downloads",
//   "issues_url": "https://api.github.com/repos/octocat/git-consortium/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/octocat/git-consortium/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/octocat/git-consortium/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/octocat/git-consortium/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/octocat/git-consortium/labels{/name}",
//   "releases_url": "https://api.github.com/repos/octocat/git-consortium/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/octocat/git-consortium/deployments",
//   "created_at": "2014-03-28T17:55:38Z",
//   "updated_at": "2024-05-23T01:15:52Z",
//   "pushed_at": "2024-05-05T21:59:51Z",
//   "git_url": "git://github.com/octocat/git-consortium.git",
//   "ssh_url": "git@github.com:octocat/git-consortium.git",
//   "clone_url": "https://github.com/octocat/git-consortium.git",
//   "svn_url": "https://github.com/octocat/git-consortium",
//   "homepage": null,
//   "size": 190,
//   "stargazers_count": 294,
//   "watchers_count": 294,
//   "language": null,
//   "has_issues": true,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "has_discussions": false,
//   "forks_count": 83,
//   "mirror_url": null,
//   "archived": false,
//   "disabled": false,
//   "open_issues_count": 37,
//   "license": {
//     "key": "mit",
//     "name": "MIT License",
//     "spdx_id": "MIT",
//     "url": "https://api.github.com/licenses/mit",
//     "node_id": "MDc6TGljZW5zZTEz"
//   },
//   "allow_forking": true,
//   "is_template": false,
//   "web_commit_signoff_required": false,
//   "topics": [],
//   "visibility": "public",
//   "forks": 83,
//   "open_issues": 37,
//   "watchers": 294,
//   "default_branch": "master"
// }, 
// {
//   "id": 20978623,
//   "node_id": "MDEwOlJlcG9zaXRvcnkyMDk3ODYyMw==",
//   "name": "hello-worId",
//   "full_name": "octocat/hello-worId",
//   "private": false,
//   "owner": {
//     "login": "octocat",
//     "id": 583231,
//     "node_id": "MDQ6VXNlcjU4MzIzMQ==",
//     "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/octocat",
//     "html_url": "https://github.com/octocat",
//     "followers_url": "https://api.github.com/users/octocat/followers",
//     "following_url": "https://api.github.com/users/octocat/following{/other_user}",
//     "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
//     "organizations_url": "https://api.github.com/users/octocat/orgs",
//     "repos_url": "https://api.github.com/users/octocat/repos",
//     "events_url": "https://api.github.com/users/octocat/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/octocat/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "html_url": "https://github.com/octocat/hello-worId",
//   "description": "My first repository on GitHub.",
//   "fork": false,
//   "url": "https://api.github.com/repos/octocat/hello-worId",
//   "forks_url": "https://api.github.com/repos/octocat/hello-worId/forks",
//   "keys_url": "https://api.github.com/repos/octocat/hello-worId/keys{/key_id}",
//   "collaborators_url": "https://api.github.com/repos/octocat/hello-worId/collaborators{/collaborator}",
//   "teams_url": "https://api.github.com/repos/octocat/hello-worId/teams",
//   "hooks_url": "https://api.github.com/repos/octocat/hello-worId/hooks",
//   "issue_events_url": "https://api.github.com/repos/octocat/hello-worId/issues/events{/number}",
//   "events_url": "https://api.github.com/repos/octocat/hello-worId/events",
//   "assignees_url": "https://api.github.com/repos/octocat/hello-worId/assignees{/user}",
//   "branches_url": "https://api.github.com/repos/octocat/hello-worId/branches{/branch}",
//   "tags_url": "https://api.github.com/repos/octocat/hello-worId/tags",
//   "blobs_url": "https://api.github.com/repos/octocat/hello-worId/git/blobs{/sha}",
//   "git_tags_url": "https://api.github.com/repos/octocat/hello-worId/git/tags{/sha}",
//   "git_refs_url": "https://api.github.com/repos/octocat/hello-worId/git/refs{/sha}",
//   "trees_url": "https://api.github.com/repos/octocat/hello-worId/git/trees{/sha}",
//   "statuses_url": "https://api.github.com/repos/octocat/hello-worId/statuses/{sha}",
//   "languages_url": "https://api.github.com/repos/octocat/hello-worId/languages",
//   "stargazers_url": "https://api.github.com/repos/octocat/hello-worId/stargazers",
//   "contributors_url": "https://api.github.com/repos/octocat/hello-worId/contributors",
//   "subscribers_url": "https://api.github.com/repos/octocat/hello-worId/subscribers",
//   "subscription_url": "https://api.github.com/repos/octocat/hello-worId/subscription",
//   "commits_url": "https://api.github.com/repos/octocat/hello-worId/commits{/sha}",
//   "git_commits_url": "https://api.github.com/repos/octocat/hello-worId/git/commits{/sha}",
//   "comments_url": "https://api.github.com/repos/octocat/hello-worId/comments{/number}",
//   "issue_comment_url": "https://api.github.com/repos/octocat/hello-worId/issues/comments{/number}",
//   "contents_url": "https://api.github.com/repos/octocat/hello-worId/contents/{+path}",
//   "compare_url": "https://api.github.com/repos/octocat/hello-worId/compare/{base}...{head}",
//   "merges_url": "https://api.github.com/repos/octocat/hello-worId/merges",
//   "archive_url": "https://api.github.com/repos/octocat/hello-worId/{archive_format}{/ref}",
//   "downloads_url": "https://api.github.com/repos/octocat/hello-worId/downloads",
//   "issues_url": "https://api.github.com/repos/octocat/hello-worId/issues{/number}",
//   "pulls_url": "https://api.github.com/repos/octocat/hello-worId/pulls{/number}",
//   "milestones_url": "https://api.github.com/repos/octocat/hello-worId/milestones{/number}",
//   "notifications_url": "https://api.github.com/repos/octocat/hello-worId/notifications{?since,all,participating}",
//   "labels_url": "https://api.github.com/repos/octocat/hello-worId/labels{/name}",
//   "releases_url": "https://api.github.com/repos/octocat/hello-worId/releases{/id}",
//   "deployments_url": "https://api.github.com/repos/octocat/hello-worId/deployments",
//   "created_at": "2014-06-18T21:26:19Z",
//   "updated_at": "2024-05-23T05:07:22Z",
//   "pushed_at": "2024-05-06T10:29:56Z",
//   "git_url": "git://github.com/octocat/hello-worId.git",
//   "ssh_url": "git@github.com:octocat/hello-worId.git",
//   "clone_url": "https://github.com/octocat/hello-worId.git",
//   "svn_url": "https://github.com/octocat/hello-worId",
//   "homepage": null,
//   "size": 160,
//   "stargazers_count": 403,
//   "watchers_count": 403,
//   "language": null,
//   "has_issues": true,
//   "has_projects": true,
//   "has_downloads": true,
//   "has_wiki": true,
//   "has_pages": false,
//   "has_discussions": false,
//   "forks_count": 174,
//   "mirror_url": null,
//   "archived": false,
//   "disabled": false,
//   "open_issues_count": 71,
//   "license": null,
//   "allow_forking": true,
//   "is_template": false,
//   "web_commit_signoff_required": false,
//   "topics": [],
//   "visibility": "public",
//   "forks": 174,
//   "open_issues": 71,
//   "watchers": 403,
//   "default_branch": "master"
// }
// ]

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

function handleCreateRepoCard

handleForm()  
})



// let reposList = document.getElementById('repos-list')
// let repoName = document.createElement('li')
// let repoUrl = document.createElement('li')
// let repoBox = document.createElement('li')

// repoName.innerText = repo.name
// repoUrl.innerText = repo.html_url

// reposList.appendChild(repoName)
// reposList.appendChild(repoUrl)
