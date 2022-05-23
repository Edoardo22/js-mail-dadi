const buttonElementUser = document.getElementById("numberGenUser");
buttonElementUser.innerHTML = ("Genera un numero!")
const buttonElementPc = document.getElementById("numberGenPc");
buttonElementPc.innerHTML = ("Il tuo avversario!")
userList = [];
pcList = [];
let userPoint = 0;
let pcPoint = 0;
const titleElement = document.getElementById("whoWin")
const resultElement = document.getElementById("result")
buttonElementUser.addEventListener("click", function () {

    let userNumber = (Math.random() * 5) + 1;
    userNumber = Math.round(userNumber)
    userPoint = userPoint + userNumber;
    userList.push(userNumber);
    buttonElementUser.innerHTML = (`User ha fatto ${userNumber}`)
    let pcNumber = (Math.random() * 5) + 1;
    pcNumber = Math.round(pcNumber)
    pcPoint = pcPoint + pcNumber;
    pcList.push(pcNumber);
    buttonElementPc.innerHTML = (`pc ha fatto ${pcNumber}`)

})

resultElement.addEventListener("click", function () {

    if (userPoint > pcPoint) {
        titleElement.innerHTML = (`HAI VINTO! ${userPoint} contro ${pcPoint}`)
        titleElement.className = ""
        document.getElementById("whoWin").classList.add("text-success");
    }
    else if (pcPoint > userPoint) {
        titleElement.innerHTML = (`HAI PERSO! ${userPoint} contro ${pcPoint}`)
        titleElement.className = ""
        document.getElementById("whoWin").classList.add("text-danger");
    }
    else if (pcPoint === userPoint) {
        titleElement.innerHTML = (`PAREGGIO! ${pcPoint} contro ${userPoint}`)
        titleElement.className = ""
        document.getElementById("whoWin").classList.add("text-primary");
    }
})