const orderPizza = (pizza, price) =>
    `Pizza: ${pizza},\nPrice: ${price} Rs\nPayment received: ${price} Rs\nOrder number #${Math.floor(Math.random() * 1000000)}`;

let pizzaType = prompt("Enter the type of pizza you want to order:");
let pizzaPrice = prompt("Enter the price of the pizza:");

if (!pizzaType || isNaN(pizzaPrice) || pizzaPrice <= 0) {
    alert("Invalid input! Please enter valid pizza type and price.");
} else {
    let result = orderPizza(pizzaType, pizzaPrice);
    document.write(result)
    console.log(result);
    alert("Your order has been successfully!");
}
