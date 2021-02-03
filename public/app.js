let body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.display = "flex";
body.style.flexWrap = "wrap";
document.getElementById("body").addEventListener("onmousemove", draw);
function draw(e) {
  console.log(e);
  let x = e.clientX;
  let y = e.clientY;

  // document.getElementById("shape").innerHTML = 80;
  let numFrame = 2;
  for (let i = 0; i < numFrame; i++) {
    let frame = document.createElement("div");
    // frame.setAttribute("class", "width");
    frame.setAttribute("class", "height");
    document.body.appendChild(frame);
    let elements = document.getElementsByClassName("height");
    // elements[i].style.height = "5px";
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      elements[i].style.position = "absolute";
      elements[i].style.left = `${x}px`;
      elements[i].style.top = `${y}px`;
      elements[i].style.backgroundColor = "black";
      elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
        50}px`;
      elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
        50}px`;
      elements[i].style.margin = "1px";
      elements[i].style.borderRadius = "200px";
      elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    }
    if (randomNumber === 1) {
      elements[i].style.position = "absolute";
      elements[i].style.left = `${x}px`;
      elements[i].style.top = `${y}px`;
      elements[i].style.backgroundColor = "white";
      elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
        50}px`;
      elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
        50}px`;
      elements[i].style.borderRadius = "200px";
      elements[i].style.margin = "1px";
      elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    }
    // let elementsPosition = document.getElementsByClassName("position");
    // elements[i].style.position = "absolute";
    // elements[i].style.top = { y };
    // let randomNumber = Math.floor(Math.random() * 2);
    // if (randomNumber === 0) {
    //   elements[i].style.backgroundColor = "black";
    //   elements[i].style.borderRadius = "5px";
    // }
    // if (randomNumber === 1) {
    //   elements[i].style.backgroundColor = "red";
    //   elements[i].style.borderRadius = "5px";
    // }
  }
}

// setInterval(() => {
//   draw();
// }, 400);

// setTimeout(() => {
//   draw();
// }, 400);
