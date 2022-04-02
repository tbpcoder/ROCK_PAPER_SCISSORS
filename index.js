

function computerPlay(){
    let temp=Math.floor(Math.random() * 2);
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

function game(inp,computerPlay){
    if(inp==computerPlay){
        console.log("It's a tie with"+inp);
    }else if((inp=="rock"&&computerPlay=="paper")||(inp=="paper"&&computerPlay=="scissors")||(inp=="scissors"&&computerPlay=="rock")){
        console.log("You lost: "+computerPlay+"beats"+inp);
        scorec++;
    }else{
        console.log("You won: "+inp+"beats"+computerPlay);
        scorep++;
    }
}

let playerinp;

for(let i=0;i<5;i++){
    playerinp=prompt("Choose rock, paper, scissors: ","rock");
    if(playerinp==null){
        console.log("Empty input exiting.");
    }
    game(playerinp.toLowerCase,computerPlay);
}

if(scorep>scorec){
    console.log("You won against AI! You are the last hope for humanity when AI takes over the planet");
}else if(scorec<scorep){
    console.log("You lost against a bot.");
}else{
    console.log("You and the bot have the same score.")
}
