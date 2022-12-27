const pResult = document.querySelector(".pResult");

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
