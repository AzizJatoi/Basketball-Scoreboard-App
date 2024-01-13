let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newGame = document.getElementById("new-game-btn")
const homeScoreOne = document.getElementById("home-add-one")
const homeScoreTwo = document.getElementById("home-add-two")
const homeScoreThree = document.getElementById("home-add-three")
let homeWinning = document.getElementById("home-winning")
let guestWinning = document.getElementById("guest-winning")
const guestScoreOne = document.getElementById("guest-add-one")
const guestScoreTwo = document.getElementById("guest-add-two")
const guestScoreThree = document.getElementById("guest-add-three")
let count = 0
let guestCount = 0

homeScoreOne.addEventListener("click", function() {
    count += 1
    homeScore.textContent = count
    winner()

})

homeScoreTwo.addEventListener("click", function() {
    count += 2
    homeScore.textContent = count
    winner()

})

homeScoreThree.addEventListener("click", function() {
    count += 3
    homeScore.textContent = count
    winner()

})

guestScoreOne.addEventListener("click", function() {
    guestCount += 1
    guestScore.textContent = guestCount
    winner()

})

guestScoreTwo.addEventListener("click", function() {
    guestCount += 2
    guestScore.textContent = guestCount
    winner()

})

guestScoreThree.addEventListener("click", function() {
    guestCount += 3
    guestScore.textContent = guestCount
    winner()

})

newGame.addEventListener("click", function() {
    console.log("new game")
    count = 0
    guestCount = 0
    guestScore.textContent = guestCount
    homeScore.textContent = count
    winner()
})

function winner() {
    if(count > guestCount) {
        homeScore.style.backgroundColor = "#007FFF"
        guestScore.style.backgroundColor = "black"
        homeWinning.textContent = "Winning"
        guestWinning.textContent = ""
    } else if (guestCount > count) {
        guestScore.style.backgroundColor = "#007FFF"
        homeScore.style.backgroundColor = "black"
        guestWinning.textContent = "Winning"
        homeWinning.textContent = ""


    } else {
        homeScore.style.backgroundColor = "black"
        guestScore.style.backgroundColor = "black"
        guestWinning.textContent = ""
        homeWinning.textContent = ""

    }
}
