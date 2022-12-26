const pResult = document.querySelector(".pResult");
const label = document.querySelector(".label");

function numero(num){
    let numero = pResult.innerHTML;
    pResult.innerHTML = numero + num;

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