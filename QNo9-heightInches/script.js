function convertHeightToFeet() {
    let name = prompt("What is your name?");
    let heightInInches = prompt("What is your height in inches?");

    if (!name || isNaN(heightInInches) || heightInInches <= 0) {
        alert("Invalid input. Please provide a valid name and height.");
        return;
    }

    let feet = Math.floor(heightInInches / 12);
 
    let inches = heightInInches % 12;

    alert(`${name}, you are ${feet} feet ${inches} inches tall.`);
    console.log(`${name}, you are ${feet} feet ${inches} inches tall.`);
}


convertHeightToFeet();
