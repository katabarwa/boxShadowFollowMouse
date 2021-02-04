let body = document.querySelector("body");
body.style.backgroundColor = "black";
// body.style.display = "flex";
// body.style.flexWrap = "wrap";
document.getElementById("body").addEventListener("click", clickBody);
function clickBody(e) {
  let x = e.clientX;
  let y = e.clientY;
  let frame = document.createElement("div");
  frame.setAttribute("class", "frame");
  document.body.appendChild(frame);
  let elements = document.getElementsByClassName("frame");
  console.log("elements-array", elements);
  for (let i = 0; i < elements.length - 1; i++) {
    if (i === 0) {
      elements[elements.length - 1].style.position = "absolute";
      elements[elements.length - 1].style.left = `${x}px`;
      elements[elements.length - 1].style.top = `${y}px`;
      elements[elements.length - 1].style.backgroundColor = "black";
      elements[elements.length - 1].style.width = `${Math.floor(
        Math.random() * (200 - 50)
      ) + 50}px`;
      elements[elements.length - 1].style.height = `${Math.floor(
        Math.random() * (200 - 50)
      ) + 50}px`;
      elements[elements.length - 1].style.margin = "1px";
      elements[elements.length - 1].style.borderRadius = "200px";
      elements[elements.length - 1].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    } else {
      elements[elements.length].style.position = "absolute";
      elements[elements.length].style.left = `${x}px`;
      elements[elements.length].style.top = `${y}px`;
      elements[elements.length].style.backgroundColor = "black";
      elements[elements.length].style.width = `${Math.floor(
        Math.random() * (200 - 50)
      ) + 50}px`;
      elements[elements.length].style.height = `${Math.floor(
        Math.random() * (200 - 50)
      ) + 50}px`;
      elements[elements.length].style.margin = "1px";
      elements[elements.length].style.borderRadius = "200px";
      elements[elements.length].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    }
  }
}
//
// }
// var divs = document.getElementsByTagName('div');
// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', capture, true);
//     divs[i].addEventListener('click', bubble, false);
// }

// function draw(e) {
//   console.log(e);

//   console.log("elements", elements);

//   let randomNumber = Math.floor(Math.random() * 2);
//   console.log(randomNumber);

//   if (randomNumber === 0) {
//     let x = e.clientX;
//     let y = e.clientY;
//     elements[i].style.position = "absolute";
//     elements[i].style.left = `${x}px`;
//     elements[i].style.top = `${y}px`;
//     elements[i].style.backgroundColor = "black";
//     elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.margin = "1px";
//     elements[i].style.borderRadius = "200px";
//     elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
//   }
//   if (randomNumber === 1) {
//     let x = e.clientX;
//     let y = e.clientY;
//     elements[i].style.position = "absolute";
//     elements[i].style.left = `${x}px`;
//     elements[i].style.top = `${y}px`;
//     elements[i].style.backgroundColor = "white";
//     elements[i].style.width = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.height = `${Math.floor(Math.random() * (200 - 50)) +
//       50}px`;
//     elements[i].style.borderRadius = "200px";
//     elements[i].style.margin = "1px";
//     elements[i].style.boxShadow = "0px 0px 5px 1px #FFFFFF";
//   }
// }

// setInterval(() => {
//   draw();
// }, 400);

// setTimeout(() => {
//   draw();
// }, 400);
