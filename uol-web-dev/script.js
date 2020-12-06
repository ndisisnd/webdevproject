// This comment is here because file cannot be empty
// Do ensure that you variable names are all unique and meaningful
function toggleVisibility(selectedTab) {
  var content = document.getElementsByClassName("mmapcontent");
  for (var i = 0; i < content.length; i++) {
    if (content[i].id == selectedTab) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }
}

function toggleVisibility(selectedTab) {
  var content = document.getElementsByClassName("dcmapcontent");
  for (var i = 0; i < content.length; i++) {
    if (content[i].id == selectedTab) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  }
}
