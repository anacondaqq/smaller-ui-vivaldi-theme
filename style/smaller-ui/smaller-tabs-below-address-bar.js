// Fix new tab button's hardcoded z-index value 
(function() {
    var setNewTabZindex = setInterval(function wait() {
        var nb = document.querySelector(".button-tabbar.newtab");
        nb.style.zIndex = 1;
        console.log("Fix: new tab button z-index");
        clearInterval(setNewTabZindex)
    }, 500);
})();

