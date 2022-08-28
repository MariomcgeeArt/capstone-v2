let express = require('express')
let app = express()
let httpServer = require('http').createServer(app)
let io = require('socket.io')(httpServer)

app.use(express.static("public"))


let PORT = process.env.PORT || 8000
httpServer.listen(PORT , () => console.log("Server started on PORT ${PORT}"))