

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
        return `It's a tie with ${inp}`;
    }else if((inp=="rock"&&temp=="paper")||(inp=="paper"&&temp=="scissors")||(inp=="scissors"&&temp=="rock")){
        scorec++;
       return `You lost: ${temp} beats ${inp}`;
    }else{
        scorep++;
        return `You won: ${inp} beats ${temp}`;
    }
}



let playerinp;


while(scorec!=5&&scorep!=5){
    let img=document.getElementsByTagName('img').dataKey;
    console.log('img');
    img.addEventListener("click",function(e){
        const playerinp=document.querySelector( `img[data-key="${e.keyCode}"]`);
        console.log(playerinp);
    })
}

function checkScore(){
if(scorep>scorec){
    return "You won against AI! You are the last hope for humanity when AI takes over the planet";
}else if(scorec<scorep){
    return "You lost against a bot.";
}else{
    return "You and the bot have the same score.";
}
}

