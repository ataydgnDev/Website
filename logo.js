window.onload = function() {
    var logo = document.getElementById("resm");
    if (logo) {
        logo.addEventListener("click", function() {
            console.log("Logo tıklandı!");
            window.location.href = "anasayfa.html";
        });
    }
};
