// set global variables
const choices=["rock","paper","scissors"] //array for the computer to choose from

let userScore=0
let computerScore=0
let gameState=1

// alert for the user to access the console to play the game
window.alert("This game is playable only through the console for now. Please press F12 to access your console")


// function that returns coumpter's selection
function computerPlays(){
    randomNum=Math.floor(Math.random()*3)
    return choices[randomNum]
}

// function that returns user's se;ection
function userPlays(){
    let userChoice='choice'
    do{
        userChoice=prompt("Enter your choice")
        userChoice=userChoice.toLowerCase() //convert to lowercase for ease of comparing
    }
    while(userChoice==='' && !userChoice) //check for null or empty string
    return userChoice

}

//logic of the game 
function gameLogic(userScore,computerScore){

    while(userScore<5 && computerScore<5){ //loop that runs until one of the players has 5 wins

        //get the choices for computer and user and set it to a variable
        userSelection=userPlays()
        computerSelection=computerPlays()

        //compare all the possible game scenarios 
        if(userSelection===computerSelection){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("Tie")
         }
        else if(computerSelection===choices[0]&&userSelection===choices[2]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("Computer Wins")
            computerScore+=1
            console.log(`Computer = ${computerScore}`)
        }
        else if(computerSelection===choices[1]&&userSelection===choices[0]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("Computer Wins")
            computerScore+=1
            console.log(`Computer = ${computerScore}`)
        }
        else if(computerSelection===choices[2]&&userSelection===choices[1]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("Computer Wins")
            computerScore+=1
            console.log(`Computer = ${computerScore}`)
        }
        else if(computerSelection===choices[1]&&userSelection===choices[2]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("User Wins")
            userScore++
            console.log(`User = ${userScore}`)
        }
        else if(computerSelection===choices[0]&&userSelection===choices[1]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("User Wins")
            userScore++
            console.log(`User = ${userScore}`)
        }
        else if(computerSelection===choices[2]&&userSelection===choices[0]){
            console.log(`Computer chooses ${computerSelection}`)
            console.log("User Wins")
            userScore++
            console.log(`User = ${userScore}`)
        }
    
    }

    //alert the user if won or lost
    if(userScore===5){
        window.alert("You win!")
    }
    else if (computerScore===5){
        window.alert("Game over. You lose!")
    }

    

}

//function that runs the game
function playGame(gameState){
  
    //introduction of the game
  window.alert("Welcome to Rock, paper Scissors!")  
  window.alert("You will be playing against the computer")  
  window.alert("First to 5 wins! All the best!")  
  while(gameState===1){
        gameLogic(userScore,computerScore)
        gameState=parseInt(prompt("Enter 1 to play again and 0 to stop"))//get gameState valye from the user
        console.clear()
    }   
}

playGame(gameState)