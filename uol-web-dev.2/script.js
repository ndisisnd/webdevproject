// This comment is here because file cannot be empty
// Do ensure that you variable names are all unique and meaningful

//Tabs style
function showTickets() {
  let tickets = document.getElementById('container-ticket');
  let display = window.getComputedStyle(tickets, null).getPropertyValue('display');
  if(display === "flex"){
      display = "none";
    }
  }
 

//Ticketing style
function submit(){
  var numberOfTickets = document.getElementById("numberOfTickets").value;
  var date = document.getElementById("date").value;
  var toMarvel=document.getElementById("select-marvel").value;
  var toDC = document.getElementById("select-dc").value;
  if(confirm("Are you sure you want to buy: \n"+
             numberOfTickets+" tickets"+" on "+date )){
      
  } else {
      
  }
 }