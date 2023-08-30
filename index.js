let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

let count = 0
let counter = 0

function addOne() {
    count = count + 1
    homeScore.textContent = count
}
function addTwo() {
    count = count + 2
    homeScore.textContent = count
}
function addThree() {
    count = count + 3
    homeScore.textContent = count
}

function guestAddOne() {
    counter = counter + 1
    guestScore.textContent = counter
}

function guestAddTwo() {
    counter = counter + 2
    guestScore.textContent = counter
}
function guestAddThree() {
    counter = counter + 3
    guestScore.textContent = counter
}