function marksheet() {
   
    let name = prompt("Enter your name:");
    let rollNo = prompt("Enter your roll number:");

 
    if (!name || !isNaN(name)) {
        alert("Invalid name. Please enter a valid string for the name.");
        return;
    }
    if (!rollNo || !/^[a-zA-Z0-9]+$/.test(rollNo)) {
        alert("Invalid roll number. Please enter a valid alphanumeric roll number.");
        return;
    }

  
    let subjects = ["English", "Maths", "Science", "Social Studies", "Computer", "Urdu"];
    let marks = [];
    let totalMarks = 0;

    for (let subject of subjects) {
        let mark = parseFloat(prompt(`Enter marks for ${subject} (out of 100):`));
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert(`Invalid marks for ${subject}. Please enter a number between 0 and 100.`);
            return;
        }
        marks.push(mark);
        totalMarks += mark;
    }

  
    function totalSubjectMarks() {
        return totalMarks;
    }

    
    function calculatePercentage(total, numSubjects) {
        return (total / (numSubjects * 100)) * 100;
    }

    let total = totalSubjectMarks();
    let percentage = calculatePercentage(total, subjects.length);

    let grade;
    if (percentage >= 85 && percentage <= 100) grade = "A+";
    else if (percentage >= 75 && percentage < 85) grade = "A";
    else if (percentage >= 65 && percentage < 75) grade = "B+";
    else if (percentage >= 60 && percentage < 65) grade = "B";
    else if (percentage >= 55 && percentage < 60) grade = "C";
    else if (percentage >= 50 && percentage < 55) grade = "D";
    else grade = "F";

    
    console.log("************** MarkSheet **************");
    console.log(`Name: ${name}`);
    console.log(`Roll No: ${rollNo}`);
    console.log("\nMarks:");
    subjects.forEach((subject, index) => {
        console.log(`${subject}: ${marks[index]}`);
    });
    console.log(`\nYour total marks = ${total}`);
    console.log(`You got a ${percentage.toFixed(2)}%`);
    console.log(`and have a Grade "${grade}"`);
    alert(`************** MarkSheet **************\n
Name: ${name}\n
Roll No: ${rollNo}\n
Marks:\n
${subjects.map((subject, i) => `${subject}: ${marks[i]}`).join("\n")}\n
Your total marks = ${total}\n
You got a ${percentage.toFixed(2)}%\n
and have a Grade "${grade}"`);
}


marksheet();
