function getCounterValue() {
    var counterText = document.getElementById("counter").innerText;
    return parseInt(counterText);
}

function updateCounterDisplay(newValue) {
    document.getElementById("counter").innerText = newValue;
}

function tickUp() {
    let currentVal = getCounterValue();
    updateCounterDisplay(currentVal + 1);
}

function tickDown() {
    let currentVal = getCounterValue();
    updateCounterDisplay(currentVal - 1);
}
function runForLoop() {
    let max = getCounterValue();
    let resultString = "";
    
    for (let i = 0; i <= max; i++) {
        resultString += i + " "; 
    }
    
    document.getElementById("forLoopResult").innerText = resultString;
}

function showOddNumbers() {
    let max = getCounterValue();
    let resultString = "";
    
    for (let i = 1; i <= max; i++) {
        if (i % 2 !== 0) {
            resultString += i + " ";
        }
    }
    
    document.getElementById("oddNumberResult").innerText = resultString;
}

function addMultiplesToArray() {
    let max = getCounterValue();
    let multiplesArray = [];

    for (let i = max; i >= 5; i--) {
        if (i % 5 === 0) {
            multiplesArray.push(i);
        }
    }

    console.log(multiplesArray);
}

function printCarObject() {
    let typeInput = document.getElementById("carType").value;
    let mpgInput = document.getElementById("carMPG").value;
    let colorInput = document.getElementById("carColor").value;

    let myCar = {
        cType: typeInput,
        cMPG: mpgInput,
        cColor: colorInput
    };

    console.log(myCar);
}

function loadCar(carNumber) {
    let selectedCar;


    if (carNumber === 1) {
        selectedCar = carObject1;
    } else if (carNumber === 2) {
        selectedCar = carObject2;
    } else if (carNumber === 3) {
        selectedCar = carObject3;
    }

    if (selectedCar) {
        document.getElementById("carType").value = selectedCar.cType;
        document.getElementById("carMPG").value = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }
}

function changeColor(colorId) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorId === 1) {
        paragraph.style.color = "red";
    } else if (colorId === 2) {
        paragraph.style.color = "green";
    } else if (colorId === 3) {
        paragraph.style.color = "blue";
    }
}