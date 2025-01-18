const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const githubResponse = {
    "login": "shahvezjumani",
    "id": 114255762,
    "node_id": "U_kgDOBs9nkg",
    "avatar_url": "https://avatars.githubusercontent.com/u/114255762?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shahvezjumani",
    "html_url": "https://github.com/shahvezjumani",
    "followers_url": "https://api.github.com/users/shahvezjumani/followers",
    "following_url": "https://api.github.com/users/shahvezjumani/following{/other_user}",
    "gists_url": "https://api.github.com/users/shahvezjumani/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shahvezjumani/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shahvezjumani/subscriptions",
    "organizations_url": "https://api.github.com/users/shahvezjumani/orgs",
    "repos_url": "https://api.github.com/users/shahvezjumani/repos",
    "events_url": "https://api.github.com/users/shahvezjumani/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shahvezjumani/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shahvez",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "A Computer Science Student",
    "twitter_username": null,
    "public_repos": 27,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-09-23T18:28:58Z",
    "updated_at": "2025-01-18T11:18:25Z"
  }

app.get('/shahvez', (req, res) => {
    res.send("You are reached at the server, and now this message is response from server")
})

app.get('/login',(req, res) => {
    res.send('<h1>Hello</h1>/n<input type="text"></input>')
})

app.get('/github',(req, res) => {
    res.json(githubResponse)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})