const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure("views", {
    express:server
})

/* ROTAS */
server.get("/",function(req, res){
    return res.render("index")
})

server.get("/courses",function(req, res){
    return res.render("courses")
})

server.get("/about",function(req, res){
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

/* ACESSAR: http://localhost:5000/ */
server.listen(5000,function(){ 
    console.log('Server is runnign')
})

