let numberOfStars = parseInt(prompt("Enter the number of stars:"));

if (isNaN(numberOfStars) || numberOfStars <= 0) {
    alert("Please enter a valid positive integer!");
} else {
    let stars = "*".repeat(numberOfStars);
    console.log(stars);
   
    document.write(`My stars:${stars}`)
}

