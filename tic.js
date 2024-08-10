let boxs = document.querySelectorAll(".box");
let resbox = document.querySelector("#reset");
let newbtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let win_cont = document.querySelector(".win-cont");
let turnO = true;

const resetgame = () => {
    turnO = true;
    enableall();
    win_cont.classList.add("hide");
    msg.innerText = '';
};

const enableall = () => {
    for (let i of boxs) {
        i.disabled = false;
        i.innerText = '';
    }
};

const disableall = () => {
    for (let i of boxs) {
        i.disabled = true;
    }
};
let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        
        checkwinner();
    });
});
function showdraw() {
    msg.innerText = "It's a draw!";
    win_cont.classList.remove("hide");
    disableall();
}

function checkwinner() {
    let draw = true;
    for (let pattern of win) {
        let p1 = boxs[pattern[0]].innerText;
        let p2 = boxs[pattern[1]].innerText;
        let p3 = boxs[pattern[2]].innerText;
        if (p1 !== '' && p2 !== '' && p3 !== '') {
            if (p1 === p2 && p1 === p3) {
                showwinner(p1);
                return; 
            }
        } else {
            draw = false; 
        }
    }

    if (draw) {
        showdraw();
    }
}

function showwinner(winner) {
    msg.innerText = `Congratulations, winner is ${winner}`;
    win_cont.classList.remove("hide");
    disableall();
}
newbtn.addEventListener("click", resetgame);
resbox.addEventListener("click", resetgame);
