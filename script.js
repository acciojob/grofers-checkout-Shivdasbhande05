//your JS code here. If required.
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let sum = 0;
const price = document.querySelectorAll(".price");
price.forEach(function(price){
    sum += parseFloat(price.textContent);
});

const table = document.querySelector("table");
const row = document.createElement("tr");

const cell = document.createElement("td");
cell.innerHTML = "Total Value is " + sum;

row.appendChild(cell);

table.appendChild(row);

  
};

getSumBtn.addEventListener("click", getSum);



