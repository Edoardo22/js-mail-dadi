const userMail = prompt("inserisci la tua mail")
const mailList = ["qualcosa@gmail.com", "qualcosa@libero.it", "qualcosa@yahoo.it", "qualcosa@hotmail.com"]
let indiceTrovato;
for (i = 0; i < mailList.length; i++) {
    if (mailList[i] === userMail) {
        indiceTrovato = i;
    }
    console.log(mailList)
    console.log(indiceTrovato)
}

if (indiceTrovato === undefined) {
    alert("Non puoi accedere a questo servizio")
}
else {
    alert("Puoi accedere a questo servizio")
}