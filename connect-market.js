let market = require('socket.io-client')('http://localhost:3095');
let ip = require('my-local-ip')();

market.on('connect', function(){ 
    console.log("connect to market at localhost:3095") 
    market.emit("device-add",{name:"Puppet Master Remote",host:"http://"+ip+":4001", type:"remote"})
});
