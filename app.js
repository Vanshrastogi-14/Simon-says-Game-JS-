let gameSeq=[];
let userSeq=[];
let btnColor=["pink","yellow","blue","purple"]
let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randColor=btnColor[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game over!! Your Score was <b>${level}</b> <br>Press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="antiquewhite";
        },150)
        highestScore();
        reset();
    }
}

function btnPress(){
    btnFlash(this);
    let userColor=this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
 
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
