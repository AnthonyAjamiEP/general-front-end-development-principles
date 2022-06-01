console.log('TIC TAC TOE')

var name1 = window.prompt("Player 1 name: ");
var name2 = window.prompt("Player 2 name: ");

let player1 = document.querySelector('#player1Name')
let player2 = document.querySelector('#player2Name')

player1.innerHTML = name1
player2.innerHTML = name2

/*
let count = 0
var count = 0
const count = 0
*/

const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#b1')
const c1 = document.querySelector('#c1')
const a2 = document.querySelector('#a2')
const b2 = document.querySelector('#b2')
const c2 = document.querySelector('#c2')
const a3 = document.querySelector('#a3')
const b3 = document.querySelector('#b3')
const c3 = document.querySelector('#c3')

let current_player = 0
let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let winner = false
const elements = ['X', 'O']

const validationLine = (el1, el2, el3) => {
    let valid = false

    console.log("elements values: ", el1.innerHTML, el2.innerHTML, el3.innerHTML)

    if (el1.innerHTML == el2.innerHTML && el1.innerHTML == el3.innerHTML && el2.innerHTML == el3.innerHTML) {
        valid = true
    }

    return valid
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        // console.log(e)
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == '') {
            // Put the element of the player in the cell
            e.target.innerHTML = elements[current_player]

            if (e.target.id == 'a1') {
                if (validationLine(a1, a2, a3) || validationLine(a1, b1, c1) || validationLine(a1, b2, c3)) {
                    winner = true
                }
            } else if (e.target.id == 'a2') {
                if (validationLine(a1, a2, a3) || validationLine(a2, b2, c2)) {
                    winner = true
                }
            } else if (e.target.id == 'a3') {
                if (validationLine(a1, a2, a3) || validationLine(a3, b3, c3) || validationLine(a3, b2, c1)) {
                    winner = true
                }
            } else if (e.target.id == 'b1') {
                if (validationLine(a1, b1, c1) || validationLine(b1, b2, b3)) {
                    winner = true
                }
            } else if (e.target.id == 'b2') {
                if (validationLine(a2, b2, c2) || validationLine(b1, b2, b3) || validationLine(a1, b2, c3) || validationLine(a3, b2, c1)) {
                    winner = true
                }
            } else if (e.target.id == 'b3') {
                if (validationLine(a3, b3, c3) || validationLine(b1, b2, b3)) {
                    winner = true
                }
            } else if (e.target.id == 'c1') {
                if (validationLine(a1, b1, c1) || validationLine(c1, c2, c3) || validationLine(c1, b2, a3)) {
                    winner = true
                }
            } else if (e.target.id == 'c2') {
                if (validationLine(c1, c2, c3) || validationLine(a2, b2, c2)) {
                    winner = true
                }
            } else if (e.target.id == 'c3') {
                if (validationLine(c1, c2, c3) || validationLine(a3, b3, c3) || validationLine(a1, b2, c3)) {
                    winner = true
                }
            }

            if (a1.innerHTML != '' && a2.innerHTML != '' && a3.innerHTML != '' && b1.innerHTML != '' && b2.innerHTML != '' && b3.innerHTML != '' &&
                c1.innerHTML != '' && c2.innerHTML != '' && c3.innerHTML != '' && !winner) {
                alert("There was no winner!");
                winner = false

                // reset the starting game sign to X
                current_player = 0

                // reset all the cell content to empty
                a1.innerHTML = ''
                a2.innerHTML = ''
                a3.innerHTML = ''
                b1.innerHTML = ''
                b2.innerHTML = ''
                b3.innerHTML = ''
                c1.innerHTML = ''
                c2.innerHTML = ''
                c3.innerHTML = ''
            }

            // show the message if we have a winner
            if (winner) {
                let msg = document.querySelector('#msg')
                console.log(current_player)
                if (current_player == 0) {
                    msg.innerHTML = 'The winner is ' + (player1.innerHTML)
                } else {
                    msg.innerHTML = 'The winner is ' + (player2.innerHTML)

                }
                msg.style.display = "block"
                if (current_player == 0) {
                    let tempText1 = parseFloat(score1.innerHTML)
                    tempText1 += 1
                    score1.innerHTML = tempText1
                } else {
                    let tempText2 = parseFloat(score2.innerHTML)
                    tempText2 += 1
                    score2.innerHTML = tempText2
                }
                let restartBox = document.querySelector('#restartBox')
                restartBox.style.display = "block"
            }

            // Switch of players
            if (current_player == 0) {
                current_player = 1
            } else {
                current_player = 0
            }
        } else {
            // When there is a cliock on a cell already used
            alert('Someone already played here !')
        }
    })
})

restartBox.addEventListener('click', (e) => {
    winner = false

    // reset the starting game sign to X
    current_player = 0

    // hide the Winner message div
    msg.style.display = "none"

    // hide the Restart Game div
    restartBox.style.display = "none"

    // reset all the cell content to empty
    a1.innerHTML = ''
    a2.innerHTML = ''
    a3.innerHTML = ''
    b1.innerHTML = ''
    b2.innerHTML = ''
    b3.innerHTML = ''
    c1.innerHTML = ''
    c2.innerHTML = ''
    c3.innerHTML = ''
})