const choices=["rock","paper","scissors"]

let userScore=0
let computerScore=0
let gameState=1

window.alert("This game is playable only through the console for now. Please press F12 to access your console")

function computerPlays(){
    randomNum=Math.floor(Math.random()*3)
    return choices[randomNum]
}

function userPlays(){
    let userChoice='choice'
    do{
        userChoice=prompt("Enter your choice")
        userChoice=userChoice.toLowerCase()
    }
    while(userChoice==='' && !userChoice)
    return userChoice

}

function gameLogic(userScore,computerScore){

    while(userScore<5 && computerScore<5){

        userSelection=userPlays()
        computerSelection=computerPlays()

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

    if(userScore===5){
        window.alert("You win!")
    }
    else if (computerScore===5){
        window.alert("Game over. You lose!")
    }

    

}


function playGame(gameState){

  window.alert("Welcome to Rock, paper Scissors!")  
  window.alert("You will be playing against the computer")  
  window.alert("First to 5 wins! All the best!")  
  while(gameState===1){
        gameLogic(userScore,computerScore)
        gameState=parseInt(prompt("Enter 1 to play again and 0 to stop"))
        console.clear()
    }   
}

playGame(gameState)