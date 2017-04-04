$(function () {
    let marketUrl = "localhost:3095";
    let market = io(marketUrl);
    let userId = "user"+Math.floor(Math.random()*10000);

    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            market.close();
        } else {
            market = io(location.host);
        }
    });

    
    market.on('connect', function () {
     //   $(window).trigger({type:"connection-found"})
     console.log("market connected id", market.id);
     //market.emit("remote-in-use",{name:"remote frontend"});
     market.emit("device-add",{name:"Remote User",host:location.href, type:"remoteUser", userId:userId})
    });

    market.on('device-list', function (data) {
     //   $(window).trigger({type:"connection-found"})
     console.log("market device-list",data);
     deviceList = data;
    });


});

let deviceList;
