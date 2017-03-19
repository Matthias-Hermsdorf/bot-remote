// Hier wird der Bot ausgewählt, der gesteuert werden soll.

var selectBot = {};

selectBot.init = function () {
    selectBot.lieblingsbot = localStorage.getItem("lieblingsbot");
}

$( function () {
    $("[data-select-bot-input]").each( function (){
        $(this).val(selectBot.lieblingsbot);
    });
    
    $("[data-select-bot-input]").on("blur submit", function (e) {
        //console.log("data-select-bot-input submit");
        e.preventDefault();
        e.stopPropagation();
        selectBot.readInput();
    })

    $("[data-select-bot-button]").on("click", function (e) {
        selectBot.readInput();
    });
        
    $(document).on("car-changed", function (e){
        console.log("on change", e.host)
        localStorage.setItem("lieblingsbot",e.host)
    });
});

selectBot.readInput = function () {
    $("[data-select-bot-input]").each( function () {
        selectBot.lieblingsbot = $(this).val();
    });

    $(document).trigger({"type":"car-changed",host:selectBot.lieblingsbot})
    console.log("readInput",selectBot.lieblingsbot);
}

 
selectBot.getBotHost = function () { return selectBot.lieblingsbot;}

selectBot.init();