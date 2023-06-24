var resimElementi = document.getElementById("resim");
    resimElementi.addEventListener("click", resimTiklandi);

    function resimTiklandi() {
        console.log("Resme tıklandı!");
        window.location.href = "python.html";
    }
