document.addEventListener("DOMContentLoaded", domloaded, false);

let context;

function domloaded() {

  context = document.getElementById("canvas").getContext("2d");
  context.fillStyle = "#ff0000";
  
  

}
