//FAQ script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Ticket/Promotion script
function showPromos() {
  let promo = document.getElementById('container-promo');
  let display = window.getComputedStyle(promo, null).getPropertyValue('display');
  if (display === "flex") {
    display = "none";
  }
}

//Navbar script
function searchClose() {
  if (document.getElementById("searchicon-change").src == "https://img.icons8.com/ios-glyphs/24/000000/search.png") {
    document.getElementById("searchicon-change").src = "https://img.icons8.com/ios-filled/24/000000/delete-sign.png";
  } else {
    document.getElementById("searchicon-change").src = "https://img.icons8.com/ios-glyphs/24/000000/search.png";
  }
}

function activeSearch() {
  document.getElementById("searchbar").classList.toggle("show-searchbar");
}

function activeNav() {
  document.getElementById("navres").classList.toggle("show-navres");
}

function activeSearch() {
  document.getElementById("searchbar").classList.toggle("show-searchbar");
}

function activeNav() {
  document.getElementById("navres").classList.toggle("show-navres");
}
