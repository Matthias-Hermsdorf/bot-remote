// Dieser Teil ist nur dafür da dem Market den Host bekannt zu geben.
// Die eigentliche Verbindung mit der der Client den passenden Bot sucht, geschieht im Client
// Der Market ist zur Zeit nur localhost:3095

let market = require('socket.io-client')('http://localhost:3095');
let ip = require('my-local-ip')() || "localhost";

console.log("connect market be ip:",ip);
market.on('connect', function(){ 
    console.log("connect to market at localhost:3095 id:",market.id) 
    market.emit("device-add",{name:"Puppet Master Remote",host:"http://"+ip+":4001", type:"remote"})
});

market.on("device-list", function (e) {
    console.log("deviceList",e)
});
