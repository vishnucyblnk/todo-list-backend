// import json-server library
const jsonServer = require('json-server')

// create a server for running  json data
const mpServer =  jsonServer.create()

// setup route/path for db.json file
const router = jsonServer.router('db.json')

// return middlewares used by JSON server
const middlewares = jsonServer.defaults()

// setup port number for running json server
const port = 4000 || process.env.PORT

// use middleware and router to your server 
mpServer.use(middlewares)
mpServer.use(router)

// to listen server app to resolve request
mpServer.listen(port,()=>{
    console.log(`to-do-list server started at port : ${port} and waiting for request`);
})
