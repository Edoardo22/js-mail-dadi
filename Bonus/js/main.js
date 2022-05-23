let numeriRandomElement = document.getElementById("numeriRandom");
let numeriLista = [""];
let submitElement = document.getElementById("submit");
let nN = 0;

submitElement.addEventListener("click", function () {

    console.log(numeriRandomElement.value);
    if (numeriRandomElement.value === undefined || NaN) {
        alert("inserisci un numero")
    }
    for (i = 0; i = numeriRandomElement.value; i++) {
        nN = Math.random()
        numeriLista.push(nN)
    }
})


