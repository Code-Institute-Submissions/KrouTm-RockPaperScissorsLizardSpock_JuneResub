let userpoint= 0;
let pcpoint= 0;
let n_matches= 0;
let limit= 0;
const user_0= document.getElementById("user-0");
const pc_0= document.getElementById("pc-0");
const board_n= document.querySelector(".board");
const result_= document.querySelector(".result > p");
const rock= document.getElementById("Rock");
const paper= document.getElementById("Paper");
const scissors= document.getElementById("Scissors");
const lizard= document.getElementById("Lizard");
const spock= document.getElementById("Spock");
const three_= document.getElementById("three")
const five_= document.getElementById("five")
const infinity_= document.getElementById("infinity")

const playMatch = () => {
const choices = document.querySelectorAll(".choices > i");
const userhand = document.querySelector(".user-hand");
const pchand = document.querySelector(".pc-hand");
const hands = document.querySelectorAll(".center-hands img");

hands.forEach(hand => {hand.addEventListener("animationend", function() {this.style.animation = "";});});
const choices= ["Rock","Paper","Scissors","Lizard","Spock"];
choices.forEach(choices => {
    choices.addEventListener("click", function() {
        const random_n= (Math.floor(Math.random()*5));
        const pcchoice = choices[random_n];

    setTimeout(() => {
        compareHands(this.textContent, pcchoice);
        userhand.src = `${this.textContent}.png`;
        pchand.src = `${pcchoice}.png`;
    }, 2000);
    userhand.style.animation = "shakeUser 2s ease";
    pchand.style.animation = "shakePC 2s ease";
    });
});
};
function n_chances(){
    let mylimit = sessionStorage.getItem('mylimit');
    if (n_matches < mylimit) {
}
const compareHands = (userchoice, pcchoice) => {
    if(userchoice === pcchoice){result_.textContent="It's a DRAW!"; return;}
    if(userchoice === "Rock"){n_matches++;
        if(pcchoice === "Scissors"); else if(pcchoice === "Lizard"){result_.textContent="You WIN!"; userpoint++; return;} else{result_.textContent="Pc Wins!"; pcpoint++; return;}
    }
    if(userchoice === "Paper"){n_matches++;
        if(pcchoice === "Rock"); else if(pcchoice === "Spock"){result_.textContent="You WIN!"; userpoint++; return;} else{result_.textContent="Pc Wins!"; pcpoint++; return;}
    }
    if(userchoice === "Scissors"){n_matches++;
        if(pcchoice === "Paper"); else if(pcchoice === "Lizard"){result_.textContent="You WIN!"; userpoint++; return;} else{result_.textContent="Pc Wins!"; pcpoint++; return;}
    }
    if(userchoice === "Lizard"){n_matches++;
        if(pcchoice === "Paper"); else if(pcchoice === "Spock"){result_.textContent="You WIN!"; userpoint++; return;} else{result_.textContent="Pc Wins!"; pcpoint++; return;}
    }
    if(userchoice === "Spock"){n_matches++;
        if(pcchoice === "Scissors"); else if(pcchoice === "Rock"){result_.textContent="You WIN!"; userpoint++; return;} else{result_.textContent="Pc Wins!"; pcpoint++; return;}
    }
}
function main(){
    rock.addEventListener('click', function(){compareHands("Rock");})
    paper.addEventListener('click', function(){compareHands("Paper");})
    scissors.addEventListener('click', function(){compareHands("Scissors");})
    lizard.addEventListener('click', function(){compareHands("Lizard");})
    spock.addEventListener('click', function(){compareHands("Spock");})
}
try {choose_matches();}
catch(err) {main();}

function choose_matches(){
    three_.addEventListener('click', function(){limit=3; sessionStorage.setItem('mylimit', limit);})
    five_.addEventListener('click', function(){limit=5; sessionStorage.setItem('mylimit', limit);})
    infinity_.addEventListener('click', function(){limit=9999; sessionStorage.setItem('mylimit', limit);})
}
playMatch()
main()
choose_matches()



