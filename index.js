

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
let img=document.querySelectorAll('img');
img.forEach(element => {
    element.addEventListener('click',function(e){
        playerinp=this.getAttribute('data-key');
        console.log(playerinp);
    })
});


let temp1=checkScore();
let temp2=document.getElementsByClassName('last-part').innerText=temp1;
temp2.style.fontSize('20px');
document.getElementsByClassName('toph').innerText='';
document.getElementsByTagName('h2').innerText='';


function play(playerinp){
    while(scorec<5||scorep<5){
        let temp=game(playerinp,computerPlay());
        document.getElementsByClassName('ps').innerText= scorep;
        document.getElementsByClassName('cs').innerText= scorec;
        document.getElementsByClassName('toph').innerText=temp;
    }
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

