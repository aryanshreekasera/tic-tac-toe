let buttons = document.querySelectorAll(".btn");
let player1_text = document.getElementById("play1");
let player2_text = document.getElementById("play2");
let winner_block = document.querySelector(".winner");
let restart = document.querySelector(".restart");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let winner_name = document.querySelector(".winner_name");
let reset = document.getElementById("reset");

winner_block.hidden = true;

player1_name = prompt("Enter the name of Player 1 : ");
player2_name = prompt("Enter the name of Player 2 : ");

function setPlayerNames() {
    if (player1_name === null || player1_name.trim() == "") {
        player1_text.innerText = "Player 1";
    } else {
        player1_text.innerText = player1_name;
    }
    if (player2_name === null || player2_name.trim() == "") {
        player2_text.innerText = "Player 2";
    } else {
        player2_text.innerText = player2_name;
    }
}
setPlayerNames();

function checkwin() {
    let win = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    let winner;
    win.forEach(e => {
        let one = document.getElementById(`${e[0]}`).innerText;
        let two = document.getElementById(`${e[1]}`).innerText;
        let three = document.getElementById(`${e[2]}`).innerText;
        if (one == "O" && two == "O" && three == "O") {
            winner = "O";
        } else if (one == "X" && two == "X" && three == "X") {
            winner = "X";
        }
    });
    return winner;
}
function show_winner(winner) {
    for (let button of buttons) {
        button.disabled = true;
    }
    if (winner == "O") {
        winner_name.innerText = `${player1_text.innerText} Won!`;
        score1.innerText = `${parseInt(score1.innerText) + 1}`;
    } else if (winner == "X") {
        winner_name.innerText = `${player2_text.innerText} Won!`;
        score2.innerText = `${parseInt(score2.innerText) + 1}`;
    } else {
        winner_name.innerText = "Game Draw";
    }
    winner_block.hidden = false;
    winner_block.classList.toggle("flex");
}
function isallfill() {
    for (let button of buttons) {
        if (button.innerText == "") {
            return false;
        }
    }
    return true;
}

restart.addEventListener("click", () => {
    winner_block.classList.toggle("flex");
    winner_block.hidden = true;
    for (let button of buttons) {
        button.disabled = false;
        button.innerText = "";
    }
});
reset.addEventListener("click", () => {
    for (let button of buttons) {
        button.innerText = "";
        button.disabled = false;
    }
});

let player1 = true;
for (let button of buttons) {
    button.addEventListener("click", () => {
        if (player1 === true) {
            button.style.color = "rgb(90,170,250)";
            button.innerText = "O";
            let winner = checkwin();
            if (winner == "O") {
                show_winner(winner);
            } else {
                button.disabled = true;
                if (isallfill() === true) {
                    show_winner("none");
                } else {
                    player1 = false;
                }
            }
        } else {
            button.style.color = "rgb(250, 70, 70)";
            button.innerText = "X";
            who_win = checkwin();
            if (who_win == "X") {
                show_winner("X");
                player1 = true;
            } else {
                player1 = true;
                button.disabled = true;
            }
        }
    });
}