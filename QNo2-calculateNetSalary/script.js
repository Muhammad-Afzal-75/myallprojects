let salary = prompt("Enter your salary:");
let designation = prompt("Enter your designation (Project Manager, Web Developer, Intern):");

let deductionRate = 0;

if (designation === "Project Manager") {
    deductionRate = 0.20;
} else if (designation === "Web Developer") {
    deductionRate = 0.10;
} else if (designation === "Intern") {
    deductionRate = 0.05;
} else {
    alert("Invalid designation!");
   
}

let deductionAmount = salary * deductionRate;
let netSalary = salary - deductionAmount;


document.write( `Deduction: ${deductionRate *100}%`) ;



