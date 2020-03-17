//http://localhost:5000/

const express = require('express')

const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

server.listen(5000,function(){
    console.log('Server is runnign')
})

server.get("/",function(req, res){
    return res.render("layout")
})

server.get("/courses",function(req, res){
    return res.render("courses")
})

server.get("/about",function(req, res){
    return res.render("about")
})

nunjucks.configure("views", {
    express:server
})