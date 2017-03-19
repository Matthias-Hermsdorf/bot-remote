$(function () {
    let market = io(location.hostname+":3095");

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
    });

    market.on('device-list', function (data) {
     //   $(window).trigger({type:"connection-found"})
     console.log("market device-list",data);
     deviceList = data;
    });


});

let deviceList;
