const btnGen = document.querySelector("#btn-gen-game");
const gridElement = document.querySelector("#grid");
const newAudio = document.querySelector("#music-start");
const scoreElement = document.querySelector("#score");

btnGen.addEventListener("click", mainFunction);


// funzione principale che genera la griglia e tutto il gioco
function mainFunction() {
    let score = 0;
    scoreElement.innerHTML = "0";
    // newAudio.play();
    gridElement.innerHTML = "";
    let num = modifyDifficulty();
    let pointsArr = [];
    let numberBombs = randomBombsNumber(num);

    for (let i = 0; i < num; i++) {
        let newElement;
        newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.innerText = i + 1;
        addClass(newElement, num);

        newElement.addEventListener("click", function () {

            console.log(newElement.innerText);

            // newElement.classList.add("clicked");
            // se il numero della cella cliccata è contenuto dentro l'array allora stampa in console e applica l classe red a quell'elemento
            // inoltre chiama la funzione loose con il numero delle bombe ma devo inviare alla funzione anche l'elemento.
            if (numberBombs.includes(Number(newElement.innerText))) {
                let allCells = document.querySelectorAll(".square");
                for (let i = 0; i < num; i++) {
                    if (numberBombs.includes(i)) {
                        let allBombs = allCells[i - 1];
                        allBombs.innerHTML = "bomba";
                        allBombs.style.background = "red";
                    }

                }
            }
            else {
                newElement.classList.add("clicked");

                if (pointsArr.includes(i)) {

                }
                else {
                    pointsArr.push(i);
                    scoreElement.innerHTML = pointsArr.length;
                }
            }

            // questa soluzione mi permette di far funzionare lo score ma devo impostare una funzione per poter aggiornare il punteggio SOLO con le celle senza bombe.

        });
        gridElement.append(newElement);
    }
}

// creo una funzione che modifica la difficoltà prendendo il valore de select e ritorna la grandezza della griglia
function modifyDifficulty() {
    let numberSquares = 0;
    let valueSquare = document.querySelector("#select-difficulty").value;
    if (valueSquare == "1") {
        numberSquares = 49;
    }
    if (valueSquare == "2") {
        numberSquares = 81;
    }
    if (valueSquare == "3") {
        numberSquares = 100;
    }
    return numberSquares;
}

// creo una funzione che cambia la grandezza della griglia prendendo in input, il numero delle celle e il singolo square
function addClass(changeGrid, num) {
    let newClass = "a"
    if (num == 49) {
    }
    else if (num == 81) {
        newClass = "squareMedium";
        changeGrid.classList.add(newClass);
    }
    else if (num == 100) {

        newClass = "squareHard";
        changeGrid.classList.add(newClass);
    }
}

// creo una funzione che prenderà in ingresso la grandezza della griglia (num delle celle) e calcolerà i numeri casuali da 1 a n
// se presente all'interno dell'array non lo inserirà, in caso contrario lo pusha dentro l'array. Alla fine ritornerà l'array.

function randomBombsNumber(cells) {
    let arrayBombs = [];
    let randomNum;
    while (arrayBombs.length < 16) {
        randomNum = Math.floor(Math.random() * cells + 1);
        if (!arrayBombs.includes(randomNum)) {
            arrayBombs.push(randomNum);
        }
    }
    return arrayBombs;
}