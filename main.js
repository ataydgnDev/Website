var resimElementi = document.getElementById("resim");
    resimElementi.addEventListener("click", resimTiklandi);

    function resimTiklandi() {
        console.log("Resme tıklandı!");
        window.location.href = "python.html";
    }
    var links = document.getElementsByClassName('tıpı ');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
        this.style.backgroundColor = '#ff0000'; /* Tıklama sonrası arka plan rengi */
      });
    }
   
    
    
    
    
    
    
