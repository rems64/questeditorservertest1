const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log("Nouvel utilisateur connecté");
    socket.broadcast.emit("newUser");
    socket.username = "Anonyme"
    socket.on('change_username', (data) => {
        socket.username = data.username
        socket.emit("maj_name", {username: socket.username})
    })
})
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
console.log("Listening on port 3000");