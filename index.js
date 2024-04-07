let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;
let count =0;


const winner = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]


const resetGame = ()=>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide")
}


boxes.forEach(box => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText = "o";
            turn0 = false;
        }else{
            box.innerText="x";
            turn0 = true;

        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if (count === 9 && !iswinner){
            gameDraw();

        }

    })
});


const gameDraw = () =>{
    msg.innerText = "Game is Draw.";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for(let pattern of winner){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)

