//Press the 'enter' key instead of clicking mouse
const input = document.querySelector("input");
input.addEventListener("keyup", function(e) {
  //cancel the default behavior
  e.preventDefault();
  if (e.keyCode === 13) {
    document.querySelector("button").click();
  }
});

//create a close button and append it to each list item
let li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  const span = document.createElement("span");
  const text = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(text);
  li[i].appendChild(span);
}
/*
===============================  TEST SUBJECT ===============================
//click on a close button to hide the current list item
let remove = document.querySelectorAll(".close");
let ul = document.querySelector("ul");
for (let i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
*/
//create a new list item when clicking the add button
function add() {
  const newLi = document.createElement("li");
  let input = document.querySelector("#myInput");
  const textNode = document.createTextNode(input.value);
  newLi.appendChild(textNode);
  if (input.value === "") {
    alert(`Add your todo's!`);
  } else {
    document.querySelector("ul").appendChild(newLi);
    //remove the previous todo's after adding to list
    input.value = "";
  }

  //append the close button with the newly added todo's
  const span = document.createElement("span");
  const text = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(text);
  newLi.appendChild(span);

  //loop the newly added list item for the "x" button
  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
