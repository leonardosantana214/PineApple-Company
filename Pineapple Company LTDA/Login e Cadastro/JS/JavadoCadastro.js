
var i = setInterval(function () {
    clearInterval(i);
    // O código desejado é apenas isto:
    document.getElementById("loader-wrapper").style.display = "none";
    document.getElementById("content").style.display = "block";
    
}, 5000);
