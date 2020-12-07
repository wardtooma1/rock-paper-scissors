let userWins = 0;
let computerWins = 0;
let userNumber = 1;
function results(){
    if (userWins > computerWins) {
        alert('You are the  boss!! You win!\nUser total wins: ' + userWins + '\nComputer total wins: ' + computerWins);
    }else if (computerWins > userWins) {
        alert('You are a loser...Sorry...\nUser total wins: ' + userWins + '\nComputer total wins: ' + computerWins);
    }else {
        alert('Its a tie....Thats sad....\nUser total wins: ' + userWins + '\nComputer total wins: ' + computerWins);
    }
}
function askNumber() {
    while (userNumber == 1 || userNumber == 2 || userNumber == 3){
        userNumber= parseInt(prompt('Type a number( 1-for rock), (2-for paper) , (3-for scissors) or type anything else to end the game!'));
    let computerNumber = Math.floor((Math.random() * 3) + 1);
        console.log( 'This is the user number ' + userNumber ,  'This is the computer number ' + computerNumber);
    if (userNumber == computerNumber ) {
        alert('Its a TIE \n User total wins: ' + userWins +'\nComputer total wins: ' + computerWins);
    }else if ( (userNumber == 1 && computerNumber == 3) || (userNumber == 2 && computerNumber == 1) || ( userNumber == 3 && computerNumber == 2)) {
        userWins +=1 ;
        alert('You win! \n User total wins: ' + userWins + '\nComputer total wins: ' + computerWins);
    } else if (( userNumber == 1 && computerNumber == 2) || (userNumber == 2 && computerNumber == 3) || ( userNumber == 3 && computerNumber == 1)) {
        computerWins += 1 ;
        alert('Computer wins!\n User total wins: ' + userWins + '\nComputer total wins: ' + computerWins );
    } else { results();
    }
    }
}
askNumber();