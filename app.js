let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-button");
let newGame= document.querySelector("#new-game");
let resetGame= document.querySelector("#reset-button");
let msg= document.querySelector("#msg");
let winContainer= document.querySelector(".winning-container");


let turn0=true;
//2D array
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");

        if(disable(box)) return ;
        if(turn0){
        
        box.innerHTML = `<span style="color:#2A6B63">O</span>`;
        turn0=false;
        } else{
        
        box.innerHTML = `<span style="color:#FF6F61">X</span>`;
        turn0=true;
        }
        checkWinner();
    });
});

const disable = (box) => {
    return box.innerHTML !== "";
}

const disableBoxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none"; 
        box.style.opacity = "0.7";        
    });
}

const showWinner= (winner) =>{
    msg.innerText=`Congratulations ${winner} wins!!!!`;
    msg.classList.add("glow");
    winContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for (let pattern of win){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" &&pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("WINNER",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const enable = (box) => {
    return box.innerHTML !== "";
}

const enableBoxes = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "auto"; 
        box.style.opacity = "1";  
        box.innerHTML = "";      
    });
    turn0 = true;
    msg.innerText = "";
    msg.classList.remove("glow");
    winContainer.classList.add("hide");
}

const resetgame=()=>{
    enableBoxes();
}

newGame.addEventListener("click", resetgame);
resetGame.addEventListener("click", resetgame);
