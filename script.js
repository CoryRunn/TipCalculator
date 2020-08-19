//this function turns the value into a dollar amount
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    //set two decimal places, so 0.00
    value = value.toFixed(2);
    //return $ 0.00
    return "$ " + value;
}

function formatSplit(value) {
    if (value === "1") return value + " person";
    return value + " people";
}

function update() {
    //'yourBill' will be a string so covert to a number
   let bill = Number(document.getElementById('yourBill').value);
   let tipPercent = document.getElementById('tipInput').value;
   let split= document.getElementById('splitInput').value;

   //get tip amount
   let tipValue = bill * (tipPercent / 100);
   //split tip between number of people
   let tipEach = tipValue / split;
   //split bill between number of people
   let newBillEach = (bill + tipValue) / split;

//place all values into HTML
    document.getElementById("tipPercent").innerHTML = tipPercent + '%';
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);
    document.getElementById('splitValue').innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML  = formatMoney(tipEach);
}

let container = document.getElementById('container');
//when user inputs a value run the function update()
container.addEventListener('input', update);