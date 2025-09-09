
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumEvensNum = 0;


for (let i = 0; i < data.length; i++) {
    
    if (data[i] % 2 === 0) {
      
        sumEvensNum += data[i];
    }
}


document.write("The sum of even numbers is:", sumEvensNum);
console.log("The sum of even numbers is:", sumEvensNum);
