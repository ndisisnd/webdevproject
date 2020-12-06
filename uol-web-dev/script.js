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

//FAQ script
 var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

    var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
    }

//Ticketing style
function clickHandle(evt, ticketing) {
    var i, tabcontent, tablinks;

    //clear the previous clicked content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    //set the tab to be "active"
    tablinks = document.getElementsByClassName('"tablinks"');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", " ");
    }
    //display the clicked tab and set it to active
    document.getElementById(ticketing).style.display = "block";
        evt.currentTarget.classname += "active";
    }
