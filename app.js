const choices=["rock","paper","scissors"]

let userScore=0
let computerScore=0

function computerPlays(){
    randomNum=Math.floor(Math.random()*3)
    return choices[randomNum]
}

function userPlays(){
    userChoice=prompt("Enter your choice")
    userChoice=userChoice.toLowerCase()
    return userChoice
}

function game(userSelection,computerSelection){

    if(userSelection===computerSelection){
        console.log("Tie")
    }
    else if(computerSelection===choices[0]&&userSelection===choices[2]){
        console.log("Computer Wins")
        computerScore+=1
        console.log(`Computer = ${computerScore}`)
    }
    else if(computerSelection===choices[1]&&userSelection===choices[0]){
        console.log("Computer Wins paper")
        computerScore+=1
        console.log(`Computer = ${computerScore}`)
    }
    else if(computerSelection===choices[2]&&userSelection===choices[1]){
        console.log("Computer Wins scissors")
        computerScore+=1
        console.log(`Computer = ${computerScore}`)
    }
    else if(computerSelection===choices[1]&&userSelection===choices[2]){
        console.log("User Wins scissors")
        userScore++
        console.log(`User = ${userScore}`)
    }
    else if(computerSelection===choices[0]&&userSelection===choices[1]){
        console.log("User Wins paper")
        userScore++
        console.log(`User = ${userScore}`)
    }
    else if(computerSelection===choices[2]&&userSelection===choices[0]){
        console.log("User Wins rock")
        userScore++
        console.log(`User = ${userScore}`)
    }
}

for(i=1;i<=10;i++){
    game(userPlays(),computerPlays())
}
