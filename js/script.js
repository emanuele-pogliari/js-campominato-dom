const btnGen = document.querySelector("#btn-gen-game");
const gridElement = document.querySelector("#grid");
const newAudio = document.querySelector("#music-start");

btnGen.addEventListener("click", mainFunction);

let newElement;
let score = 0;

function mainFunction() {
    newAudio.play();
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

            if (numberBombs.includes(Number(this.innerText))) {
                console.log("bomba cliccata");
                this.style.background = "red";
                // chiamo funzione 
                // lose();
            }
            // else {
            //     score++;
            // }
        });
        gridElement.append(newElement);
    }
}

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


// function lose() {

// }