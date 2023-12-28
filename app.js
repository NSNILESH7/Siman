let gemeSeq=[];
let userseq=[];
let high=1;
let btns=["yellow","red","green","blue"]

let started=false;
let level=0; 
let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is Started");
        started=true;
        levelUP();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },200)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");

    },200)
}

function levelUP(){
    userseq=[];
    level++;
    h2.innerText=`level :-${level}`;
    let randIdx= Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gemeSeq.push(randColor);
    console.log(gemeSeq)
 gameFlash(randBtn)
}
 
function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor)
    
    checkAns(userseq.length-1);

}
function checkAns(idx){
if(userseq[idx]==gemeSeq[idx]){
        if(userseq.length==gemeSeq.length){
          setTimeout(levelUP,1000);
        }
    }else{
        h2.innerHTML=`Game Over!You are Score-<b>${level}</b> <br><br> Press any key to Start....:)`;
        reset();
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
    }
    highscore();
}

let allBtns=document.querySelectorAll(".div");
for (btn of allBtns){
btn.addEventListener("click",btnpress)}

function highscore(){
    let score=document.querySelector("h3");
    if(high<level){
        high=level;
        score.innerHTML=`high Score(level ${high})`
    }


}


function reset(){
    started=false;
    level=0;
    gemeSeq=[];
    userseq=[];
   
}