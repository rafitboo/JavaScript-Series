let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container")
container.classList.remove("hidecont");
resetBtn.classList.remove("hidebtn");
let turnX= true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame= ()=> {
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hidecont")
    resetBtn.classList.remove("hidebtn")
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX === true){
            box.innerText="X";
            box.style.color= "red";
            turnX=false
        } else {
            box.innerText="O";
            box.style.color= "blue";
            turnX=true
        }
        box.disabled=true;
        checkWinner();
    })
})

const checkWinner =() => {
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val!="" && pos3val!=""){
            if (pos1val ===pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
}

const showWinner= (winner)=> {
    msg.innerText = `Congrats, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    container.classList.add("hidecont");
    resetBtn.classList.add("hidebtn")
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled=true
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);