let numeriRandomElement = document.getElementById("numeriRandom");
let numeriLista = [""];
let submitElement = document.getElementById("submit");
let nN = Math.random() * 10
let numeriRandom = 0;
let ultimiNumeriElement = document.getElementById("ultimiNumeri")
submitElement.addEventListener("click", function () {

    numeriRandom = parseInt(numeriRandomElement.value)

    if (numeriRandom <= 6) {
        alert("inserisci un numero maggiore di 6")
    }

    for (i = 0; i <= numeriRandom - 1; i++) {
        let x = 0;
        x = x++;
        nN = Math.random() * 10;
        nN = Math.round(nN);
        numeriLista.push(nN);

        if ((x - i) === 5) {

            ultimiNumeriElement.innerHTML += (`${nN}`)

        }
        console.log(numeriRandomElement.value);
        console.log(numeriRandom);
        console.log(nN);
        console.log(numeriLista);
    }




})


