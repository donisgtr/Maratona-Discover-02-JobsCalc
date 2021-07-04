const express = require("express")
const routes = express.Router()
const views = __dirname + "/views/"

const profile = {
    name: "Donis",
    avatar: "https://avatars.githubusercontent.com/u/14313822?v=4",
    "monthly-budget": 30000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile /* enviado o objeto para o html profile como um objeto */}))

module.exports = routes