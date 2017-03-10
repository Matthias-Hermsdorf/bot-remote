$(function () {
    market = io(location.hostname+":3095");

    
    market.on('connect', function () {
     //   $(window).trigger({type:"connection-found"})
     console.log("market connected");
     market.emit("remote-in-use",{name:"remote frontend"});
    });

    market.on('bot-list', function (data) {
     //   $(window).trigger({type:"connection-found"})
     console.log("market bot-list",data);
    });


});

let market;
