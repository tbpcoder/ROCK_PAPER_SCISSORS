

function computerPlay(){
    let temp=Math.floor(Math.random() * 3);
    switch(temp){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;

    }
}


let scorep=0,scorec=0;

function game(inp,temp){
    if(inp==temp){
        alert(`It's a tie with ${inp}`);
    }else if((inp=="rock"&&temp=="paper")||(inp=="paper"&&temp=="scissors")||(inp=="scissors"&&temp=="rock")){
        scorec++;
        alert(`You lost: ${temp} beats ${inp}`);
    }else{
        scorep++;
        alert(`You won: ${inp} beats ${temp}`);
    }
}



let playerinp;

while(scorec!=5&&scorep!=5){
    playerinp=document.querySelector("")
}

if(scorep>scorec){
    console.log("You won against AI! You are the last hope for humanity when AI takes over the planet");
}else if(scorec<scorep){
    console.log("You lost against a bot.");
}else{
    console.log("You and the bot have the same score.")
}
