

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


let prev;
let playerinp;
let img=document.querySelectorAll('img');
img.forEach(element => {
    element.addEventListener('click',function(e){
        playerinp=this.getAttribute('data-key');
        console.log(playerinp);
        play(playerinp);
        if(scorep==5||scorec==5){
            let temp1=checkScore();
            document.querySelector('.last-part').innerText=temp1;
            let temp2=document.querySelector('.body_part');
            temp2.style.fontSize='40px';
            document.querySelector('.toph').innerText='';
            document.querySelector('h2').innerText='';
        }
    })
});




function play(playerinp){
    let comp=computerPlay();
    while(comp==playerinp){
        comp=computerPlay();
    }
        let temp=game(playerinp,comp);
        let x=document.querySelector('.ps').innerText= scorep;
        document.querySelector('.cs').innerText= scorec;
        document.querySelector('.toph').innerText=temp;
}


function checkScore(){
    if(scorep==5){
        return "You won against AI! You are the last hope for humanity when AI takes over the planet";
    }else if(scorec==5){
        return "You lost against a bot.";
    }
}

