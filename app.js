

let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const drawGame =()=>{

  //console.log("Game draw");
  msgPara.innerText="Game was draw.Play again!";
  msgPara.style.backgroundColor = '#081b31';
}

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){

    userScore++;
    userScorePara.innerText = userScore;

    //console.log("You Win");
    msgPara.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msgPara.style.backgroundColor = 'green';
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose");
    msgPara.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msgPara.style.backgroundColor = 'red';
  }

}
//generating computer choice
const genCompChoice = ()=>{

  const options = ['rock','paper','scissors']
  //rock,paper,scissor

  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}


//playing game
const playGame = (userChoice) =>{

  console.log("user choice = ",userChoice);
  //Generate computer choice

  const compChoice = genCompChoice();
  console.log("Computer choice",compChoice);

  if(userChoice === compChoice){
     drawGame();
  }

  else{
    let userWin = true;
    if(userChoice === 'rock'){
      //Scissors,Paper
      userWin = compChoice === 'paper'?false:true;
    }
    else if(userChoice === 'paper'){
      //scissors,rock
      userWin = (compChoice === 'scissors'?false:true);
    }
    else{
      //paper,scissors
      userWin = (compChoice === 'rock'?false:true);
    }

    showWinner(userWin,userChoice,compChoice);
    }

  }





choices.forEach((choice) =>{
  //console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id"); //getting id of choices section
    //console.log("choice was clicked",userChoice);
    playGame(userChoice);

  });
});