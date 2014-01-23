// Saves options to localStorage.
function save_options() {
  /*var select = document.getElementById("color");
  var color = select.children[select.selectedIndex].value;
  localStorage["favorite_color"] = color;*/

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  $("#status").fadeIn(500).delay(1000).fadeOut(500);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["favorite_color"];
  if (!favorite) {
    return;
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);