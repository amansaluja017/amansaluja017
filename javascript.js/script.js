player1 = prompt("Player 1\nEnter your name");
player2 = prompt("Player 2\nEnter your name");


let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#myid");
let newbtn = document.querySelector("#myid1");
let msg = document.querySelector("#msg");
let msgCointainer = document.querySelector(".msg-cointainer");


let turnX = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnX = true;
    count = 0;
    enableboxes();
    msgCointainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        }else {
            box.innerText = "O"
            turnX = true;
        }
        box.disabled = true;
        count++;

        let iswinning = checkwinner();

        if (count === 9 && !iswinning){
             gamedraw();
        }
    });
});

 const gamedraw = () => {
     msg.innerText = "Game is draw \n Try again";
     msgCointainer.classList.remove("hide");
     disableboxes();
 };


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
};

let showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgCointainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
     let pos1val = boxes[pattern[0]].innerText
     let pos2val = boxes[pattern[1]].innerText
     let pos3val = boxes[pattern[2]].innerText

     if (pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            if (pos1val === "X"){
                console.log(`winner is ${player1}`);
            }else{
                console.log(`winner is ${player2}`);
            }
            showwinner(pos1val);
            return true;
        }
     }


    }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);




