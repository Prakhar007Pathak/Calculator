// === Numerical & Operators Buttons
let specialOperation = document.querySelectorAll(".specialOperation");
let allCharacterBtn = document.querySelectorAll(".allCharacterBtn");
// === Inputs
let operatorCharDisplay = document.querySelector("#operatorCharDisplay");
let calcDisplay = document.querySelector("#calcDisplay");
let forStorageDisp = document.querySelector("#forStorageDisp");



allCharacterBtn.forEach(character => {
    character.addEventListener("click", () => {
        // === character from data-character
        let charData = character.getAttribute("data-character");
        // === img element to remove
        let imgToRemove = document.querySelectorAll("#storageDisplay");
        console.log(charData);
        // === character from input value
        let currentValue = calcDisplay.value;
        // === last character inside of input
        let lastChar = currentValue.slice(-1);


        if (!isNaN(charData)) {
            calcDisplay.value += charData;
        } else if (['+', '-', '*', '/', '.', '^', '^(1/2)', '^(-1)'].includes(charData)) {
            if (['+', '-', '*', '/', '.', '^', '^(1/2)', '^(-1)'].includes(lastChar)) {
                calcDisplay.value = currentValue.slice(0, -1) + charData;
            } else {
                calcDisplay.value += charData;
            }
        } else if (charData === "clear") {
            calcDisplay.value = "";
            while (operatorCharDisplay.firstChild) {
                operatorCharDisplay.removeChild(operatorCharDisplay.firstChild);
            }
        } else if (charData === "cut") {
            calcDisplay.value = calcDisplay.value.slice(0, -1);
        } else if (charData === "allClear") {
            calcDisplay.value = "";
            while (operatorCharDisplay.firstChild) {
                operatorCharDisplay.removeChild(operatorCharDisplay.firstChild);
            }
            imgToRemove.forEach(imgTag => {
                imgTag.remove();
            });
        }
    })
});



// === programm to append and replace svg img and its classes inside operationCharDisplay
specialOperation.forEach(character => {
    character.addEventListener("click", () => {
        let imgData = character.getElementsByTagName("img");
        let imgSrc = imgData[0].getAttribute("src");
        let imgClass = imgData[0].getAttribute("class");
        let newImg = document.createElement("img");
        newImg.setAttribute("src", imgSrc);
        newImg.setAttribute("class", imgClass);
        console.log(imgSrc);
        console.log(imgClass);

        if (operatorCharDisplay.firstChild) {
            operatorCharDisplay.replaceChild(newImg, operatorCharDisplay.firstChild);
        } else {
            operatorCharDisplay.appendChild(newImg);
        }


    })
});



// === progg for: %;
let percentageBtn = document.querySelector("#forPercentage");
percentageBtn.addEventListener("click", () => {
    let inputValue = calcDisplay.value;
    let percentage = inputValue / 100;
    let result = new Function(`return ${percentage}`)();
    calcDisplay.value = result;
    console.log(result);

})

// === progg for factorial
let factorialBtn = document.querySelector("#forFactorial");
factorialBtn.addEventListener("click", () => {
    let inputValue = calcDisplay.value;
    let fact = math.factorial(inputValue);
    calcDisplay.value = fact;
    console.log(fact);
})



// === for storage area;
function calculationStorage(storageValue) {
    let forStorageDisp = document.querySelector(".forStorageDisp")
    let storageInput = document.createElement("input");
    storageInput.disabled = true;
    storageInput.setAttribute("id", "storageDisplay");
    storageInput.value = storageValue;
    forStorageDisp.prepend(storageInput);
    forStorageDisp.scrollTop = forStorageDisp.scrollHeight;
};



// === evaluating the values of input .
let equalBtn = document.querySelector("#forEvaluating");
equalBtn.addEventListener("click", () => {
    let inputValue = calcDisplay.value;
    // === expression for power.
    inputValue = inputValue.replace(/\^/g, "**");

    try {
        const result = new Function(`return ${inputValue}`)();
        calcDisplay.value = result;
        calculationStorage(inputValue);
        console.log(result);
    } catch (error) {
        calcDisplay.value = "Something went wrong!!!";
        console.error("Invalid Expression:", error);
    }
});
