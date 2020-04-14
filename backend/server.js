const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const about = require("./database/about")
const recipes = require("./database/recipes")

server.use(express.static("../public"))

server.set("view engine", "njk")

nunjucks.configure("../views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, resp) {
    return resp.render("home", { recipes })
})

server.get("/about", function(req, resp) {
    return resp.render("about", { about })
})

server.get("/recipes", function(req, resp) {
    return resp.render("recipes", { recipes })
})

server.listen(3000, function() {
    console.log("server is running")
})