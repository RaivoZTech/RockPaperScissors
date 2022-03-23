// Creating a "Rock Paper Scissors" game logic using "if","else if" and "else" conditonal statements.
function game(){
	var rock = 0;
	var scissors = 1;
	var paper = 2;
	var userChoice = document.getElementById("userChoice").value;
		document.getElementById("message").value;
	var compChoice = Math.floor(Math.random()*3); //computer randomly choses a number from 0, 1 or 2 which are declared variables "rock","paper","scissors"
	
	if(userChoice=="rock"&& compChoice== scissors){
		document.getElementById("message").innerHTML="You chose Rock, computer chose Scissors. You won!";
		}
	else if(userChoice=="rock"&& compChoice== paper){
		document.getElementById("message").innerHTML="You chose Rock, computer chose Paper. You lost!";
		}
	else if(userChoice=="rock"&& compChoice== rock){
		document.getElementById("message").innerHTML="You chose Rock, computer chose Rock. That's a tie!";
		}
	
	else if(userChoice=="paper"&& compChoice== rock){
		document.getElementById("message").innerHTML="You chose Paper, computer chose Rock. You won!";
		}
	else if(userChoice=="paper"&& compChoice== scissors){
		document.getElementById("message").innerHTML="You chose Paper, computer chose Scissors. You lost!";
		}
	else if(userChoice=="paper"&& compChoice== paper){
		document.getElementById("message").innerHTML="You chose Paper, computer chose Paper. That's a tie!";
		}
	
	else if(userChoice=="scissors"&& compChoice== paper){
		document.getElementById("message").innerHTML="You chose Scissors, computer chose Paper. You won!";
		}
	else if(userChoice=="scissors"&& compChoice== rock){
		document.getElementById("message").innerHTML="You chose Scissors, computer chose Rock. You lost!";
		}
	else if(userChoice=="scissors"&& compChoice== scissors){
		document.getElementById("message").innerHTML="You chose Scissors, computer chose Scissors. That's a tie!";
		}
	else{
		document.getElementById("message").innerHTML="Invalid input, please try again!";
	}
	hide();
}

function hide(){
	document.getElementById("container").style.display = "none";
}
