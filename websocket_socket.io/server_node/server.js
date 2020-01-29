var app = require('express')(),
http = require('http').Server(app),
io = require('socket.io')(http);

// Besoin de mettre pour que la route soit bien prise en compte.. super.. 
var path = require("path");

/* En socket, le serveur peut t'envoyer des donnés sans que tu lui en demandes, contrairement au protocole HTTP lui qui t''envoies que si tu demandes */

/* Le serveur renvoie cette page html à la racine du serveur (localhost:3000/) */
app.get('/', function(req, resp) {
    // pas besoin d'iniquer les slash avec le join
    resp.sendFile(path.join(__dirname, '..', 'index.html'));
})

/* connection et disconnect sont des functions écouteurs de base */
io.on('connection', function(socket) {
    console.log('salut, tu es co sur mon port');
    socket.on('disconnect', function() {
        console.log('aurevoir');
    })

    socket.on('chat_message', function (message) {
        console.log(`Message reçu : ${message}`);
        io.emit('chat_message', message);
    })
})

/* On dit au serveur d'écouter le port 3000 (localhost:3000/) */
http.listen(3100, function () {
    console.log('server up ! on 3100')
})