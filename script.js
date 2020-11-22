var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")
var li = document.querySelectorAll("li")
var deleteButton = document.getElementsByClassName("deleteButton")

//Allow collection of input length in text box
function inputLength() {
  return input.value.length
}

//Function called by click on enter to create list element with the input text and a deletebutton
function createListElement() {
  var button = document.createElement("button")
  button.innerHTML = "Delete"
  button.classList.add("deleteButton")

  var li = document.createElement("li")
  li.innerHTML = `<p>${input.value} </p>`
  ul.appendChild(li)
  li.appendChild(button)

  input.value = ""
  liListenerAdder()
  deleteButtonListener()
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement()
  }
}

function deleteItem() {}

function liListenerAdder() {
  document.querySelectorAll("li p").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.classList.add("done") //handle click
    })
  })
}

liListenerAdder()

function deleteButtonListener() {
  document.querySelectorAll(".deleteButton").forEach((item) => {
    item.addEventListener("click", (event) => {
      item.parentElement.remove
      console.log(item.parentElement.remove())
    })
  })
}

deleteButtonListener()

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)
