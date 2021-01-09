


//FAQ script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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
  let promo = document.getElementById("container-promo");
  let display = window
    .getComputedStyle(promo, null)
    .getPropertyValue("display");
  if (display === "flex") {
    display = "none";
  }
}

//Navbar script
function searchClose() {
  if (
    document.getElementById("searchicon-change").src ==
    "https://img.icons8.com/ios-glyphs/24/000000/search.png"
  ) {
    document.getElementById("searchicon-change").src =
      "https://img.icons8.com/ios-filled/24/000000/delete-sign.png";
  } else {
    document.getElementById("searchicon-change").src =
      "https://img.icons8.com/ios-glyphs/24/000000/search.png";
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

//dc map functionality
function toggleVisibility(selectedTab) {
  var content = document.getElementsByClassName("dcmapcontent");
  for (var i = 0; i < content.length; i++) {
    if (content[i].id == selectedTab) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }

  //marvel map functionality
  var content = document.getElementsByClassName("marvelmapcontent");
  for (var i = 0; i < content.length; i++) {
    if (content[i].id == selectedTab) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }
}

//marvel
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("vote-btn-marvel");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("vote-btn-marvel").disabled = true;
  document.getElementById("vote-btn-dc").disabled = true;
};

//dc//
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("vote-btn-dc");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.getElementById("vote-btn-marvel").disabled = true;
  document.getElementById("vote-btn-dc").disabled = true;
};

function EnableDisable() {
  $(':input[type="submit"]').prop('disabled', true);
}
