const io = require('socket.io-client');

var socket = io.connect('http://localhost:3000');

var msg = "Ceci est mon message";

socket.emit('change_username', {username: "Toto l'asticot"});

socket.on("maj_name", (data) => {
    console.log("On a mis le nom à jour!")
    console.log(data.username)
})

socket.on("newUser", (data) => {
    console.log("Tiens, un p'tit nouveau!");
})