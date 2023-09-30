var resimElementi = document.getElementById("python");
    resimElementi.addEventListener("click", resimTiklandi);

    function resimTiklandi() {
        console.log("Resme tıklandı!");
        window.location.href = "python-giris.html";
    }
