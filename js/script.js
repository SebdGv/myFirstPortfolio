let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");
let figureElements = document.querySelectorAll(".services figure");

const mousePointer = document.querySelector(".mousemove");

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  console.log = event.clientX;
  emptyElement.style.flexBasis = window.innerWidth - event.clientX + "px";
  titleElement.style.flexBasis = event.clientY / 2 + "px";

  figureElements.forEach(function (element) {
    element.style.flexBasis = window.innerWidth - event.clientX + "px";
  });
}

// mouse pointer

window.addEventListener("mousemove", (e) => {
  mousePointer.style.top = e.pageY + "px";
  mousePointer.style.left = e.pageX + "px";
});
