const btnGen = document.querySelector("#btn-gen-game");
const gridElement = document.querySelector("#grid");
const newAudio = document.querySelector("#music-start");

btnGen.addEventListener("click", mainFunction);

let newElement;
let score = 0;

// funzione principale che genera la griglia e tutto il gioco
function mainFunction() {
    // newAudio.play();
    gridElement.innerHTML = "";
    let num = modifyDifficulty();

    let numberBombs = randomBombsNumber(num);

    for (let i = 0; i < num; i++) {
        newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.innerText = i + 1;
        addClass(newElement, num);

        newElement.addEventListener("click", function () {

            console.log(this.innerText);
            this.classList.add("clicked");
            // se il numero della cella cliccata è contenuto dentro l'array allora stampa in console e applica l classe red a quell'elemento
            // inoltre chiama la funzione loose con il numero delle bombe ma devo inviare alla funzione anche l'elemento.
            if (numberBombs.includes(Number(this.innerText))) {
                console.log("bomba cliccata");
                this.style.background = "red";
                lose(numberBombs, newElement);
            }
            // else {
            //     score++;
            // }
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


function lose(bombe, ??) {
    for (let i = 0; i < bombe; i++) {
    }
    //se l'utente perde, la funzione lose sarà chiamata e bloccherà la griglia e rivelerà tutte le bombe

    //creando un ciclo con tutte le posizioni e darà la classe "red" a tutti gli elementi che hanno i numeri presenti nell'array. 
}