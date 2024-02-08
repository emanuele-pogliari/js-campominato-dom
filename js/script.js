const btnGen = document.querySelector("#btn-gen-game");
const gridElement = document.querySelector("#grid")

btnGen.addEventListener("click", genGrid);

let newElement;

function genGrid() {
    gridElement.innerHTML = "";
    let num = modifyDifficulty();

    for (let i = 0; i < num; i++) {
        newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.innerText = i + 1;
        addClass(newElement, num);

        newElement.addEventListener("click", function () {

            console.log(this.innerText);
            this.classList.toggle("clicked");
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