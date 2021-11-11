document.addEventListener("DOMContentLoaded", domloaded, false);

let context;

function domloaded() {

  context = document.getElementById("canvas").getContext("2d");
  context.fillStyle = "#ff0000";
  
  let x = 0;
  let y = 0;
  let index = 200;

  while (index > 0) {

    for (let i = 0; i < index; i += 20) {
      context.fillRect(x,y,20,20);
      x += 20;
    }
    index -= 20;
    for (let i = 0; i < index; i += 20) {
      context.fillRect(x,y,20,20);
      y += 20;
    }
    index -= 20;
    for (let i = 0; i < index; i += 20) {
      context.fillRect(x,y,20,20);
      x -= 20;
    }
    index -= 20;
    for (let i = 0; i < index; i += 20) {
      context.fillRect(x,y,20,20);
      y -= 20;
    }
    index -= 20;
    console.log("lets fucking go dude")
  }
}
