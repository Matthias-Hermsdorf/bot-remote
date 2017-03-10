var market = require('socket.io-client')('http://localhost:3095');

market.on('connect', function(){ 
    console.log("connect to market at localhost:3095") 
    market.emit("bot-add",{name:"Remote Backend"})
});
