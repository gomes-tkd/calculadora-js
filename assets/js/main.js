const pResult = document.querySelector(".pResult");
const label = document.querySelector(".label");
const btnEqual = document.querySelector(".btnOppEqual").innerHTML;

console.log(btnEqual.innerHTML);

function numero(num){
    let numero = pResult.innerHTML;
    pResult.innerHTML = numero + num;
}


function result() {
    pResult.innerHTML = eval(pResult.innerHTML);
}

function clearResults() {
    pResult.innerHTML = "";
}

/*
label.addEventListener("click", (e) => {
    
    let op = e.target.innerHTML.toString();
    switch (op) {
        case "+":
            console.log("+");
            break;
        case "-":
            console.log("-");
            break;
        case "*":
            console.log("*");
            break;
        case "/":
            console.log("/");
            break;
        case "=":
            break;
        default:
            break;
    }

    pResult.innerHTML = e.target.innerHTML;

});*/