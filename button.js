  // Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the button that opens the modal
var btn = document.getElementById("checkin");
function openform_checkin(){
  modal.style.display="block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1=document.getElementById("checkoutmodal");
var btn1=document.getElementById("checkout");
var span1=document.getElementsByClassName("close")[1];
var span2=document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
//btn.onclick = function() {
//  modal.style.display = "block";
//}
span1.onclick=function(){
  modal1.style.display="none";
}
function closeform(){
  document.getElementById("myModal").style.display="none";
}
function openform_checkout(){
  modal1.style.display="block";
}
function payment_status(){
  document.getElementById("status").style.display="block";
}
span2.onclick=function(){
  document.getElementById("status").style.display="none";
  document.getElementById("checkoutmodal").style.display="none";
}
