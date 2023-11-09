// ? TODO Chapter 43 - 48


// ! Question # 01

function displayAlert() {
    alert("Hello World")
}


// ! Question # 02

function alertBox() {
    alert("Thanks for purchasing from us")
}


// ! Question # 03

function deleteRow(button) {
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}


// ! Question # 05

let counter = 0 

function increase(){
    counter ++
    displayUpdatedCounter()
}

function decrease(){
    counter --
    displayUpdatedCounter()
}

function displayUpdatedCounter(){
    let counterDisplay = document.getElementById("displayCounter")
    counterDisplay.textContent = counter
}