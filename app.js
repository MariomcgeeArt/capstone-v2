let express = require('express');
let app = express();
let httpServer = require('http').createServer(app);
let io = require('socket.io')(httpServer);

let connections = [];

io.on('connect' , (socket) => {
    connections.push(socket);
    console.log(`${socket.id} has conected`);

    socket.on('disconnect' , (reason) => {
        connections = connections.filter((con) => con.id !== socket.id);
        console.log(`${socket.id} has disconnected`);

    });

});

app.use(express.static("public"));


let PORT = process.env.PORT || 8000;
httpServer.listen(PORT , () => console.log(`Server started on PORT ${PORT}`));