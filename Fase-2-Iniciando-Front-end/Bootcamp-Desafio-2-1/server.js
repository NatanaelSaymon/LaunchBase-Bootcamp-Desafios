const express = require('express')

const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'html')

server.listen(5000,function(){
    console.log('Server is runnign')
})

server.get("/",function(req, res){
    return res.render("index")
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