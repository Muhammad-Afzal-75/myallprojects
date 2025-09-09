function tax_calculator (name, salary){

    var tax_ratio = 0,
    basic_salary = 0,
        tax_deduction = 0,
        output = ""

    if (salary < 10000){
        tax_ratio = 0.0;
        
    }
    else if (salary >= 10000 && salary < 25000){
        tax_ratio = 3.5;
           
}else if (salary >=25000 && salary < 50000){
    tax_ratio = 5.0;
        
}else if (salary >=50000 && salary < 100000){
    tax_ratio = 7.0;
}else if (salary >=100000 ){
    tax_ratio = 10.0;
}

tax_deduction = salary * tax_ratio / 100;
basic_salary = salary - tax_deduction;

output = "<tr>";
    output += "<td>" + name + "</td>";
    output += "<td>" + salary+ "</td>";
    output += "<td>" + tax_deduction+ "</td>";
    output += "<td>" + basic_salary + "</td>";
    output += "</tr>";

    return output;
}

    var a1 = tax_calculator("shayan", 50000);
    var a2 = tax_calculator("ali", 150000);
    var a3 = tax_calculator("reema", 10000);

    document.getElementById("output").innerHTML  += a1;
    document.getElementById("output").innerHTML  += a2;
    document.getElementById("output").innerHTML  += a3;



