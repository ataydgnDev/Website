var menuLink = document.getElementById("menuLink");
var menuContent = document.getElementById("menuContent");

menuLink.addEventListener("click", function(e) {
  e.preventDefault();
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
});
