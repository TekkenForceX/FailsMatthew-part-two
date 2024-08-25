// Prompt the user for their name
let playerName = prompt("What is your name?");

// Prompt the user for the number of holes they want to play
let numHoles = parseInt(prompt("Would you like to play 3 or 6 holes of mini golf?"));

// Validate input to ensure it's either 3 or 6
while (numHoles !== 3 && numHoles !== 6) {
    numHoles = parseInt(prompt("Please enter either 3 or 6 for the number of holes."));
}

// Initialize total putts to 0
let totalPutts = 0;

// Loop through each hole and prompt the user for the number of putts
for (let i = 1; i <= numHoles; i++) {
    let putts = parseInt(prompt(`Enter the number of putts for hole ${i}:`));
    
    // Validate input to ensure it's a number greater than 0
    while (isNaN(putts) || putts <= 0) {
        putts = parseInt(prompt(`Invalid input. Enter a positive number for the number of putts for hole ${i}:`));
    }
    
    // Add the putts to the total
    totalPutts += putts;
}

// Calculate the course par based on the number of holes
let coursePar = numHoles * 3; // 3 par per hole

// Calculate the total par (difference between total putts and course par)
let totalPar = totalPutts - coursePar;

// Display the appropriate message based on the total par
if (totalPar > 0) {
    console.log(`Nice try, ${playerName}... Your total par was: +${totalPar}.`);
} else if (totalPar < 0) {
    console.log(`Great job, ${playerName}! Your total par was: -${totalPar}.`);
} else {
    console.log(`Good game, ${playerName}. Your total par was: 0.`);
}
