function validateUserName() {
    let userName = prompt("Enter your name:");

    const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

    if (nameRegex.test(userName)) {
        alert("Valid name");
        document.write(userName)
        console.log("Valid name:", userName);
    } else {
        alert("Invalid name. Please enter a valid name without numbers or special characters.");
        console.log("Invalid name:", userName);
    }
}


validateUserName();
