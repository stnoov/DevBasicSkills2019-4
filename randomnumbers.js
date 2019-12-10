function generateRandomNumbers(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function createArrayOfRandomNumbers() {
    var amountOfNumbers = document.getElementById('amountOfNumbers').value;
    var minValue = document.getElementById('minRangeValue').value;
    var maxValue = document.getElementById('maxRangeValue').value;
    let arrayOfNumbers = [];
    let RandomNumbersResult ; 
        for (i=0; i < amountOfNumbers; i++) {
            arrayOfNumbers[i] = generateRandomNumbers(minValue,maxValue);
            RandomNumbersResult = RandomNumbersResult + " " + arrayOfNumbers[i];
        }
    let negativeNumbers = 0, positiveNumbers = 0, oddNumbers = 0, evenNumbers = 0;
        for (i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] < 0) { negativeNumbers++; }
            if (arrayOfNumbers[i] > 0) { positiveNumbers++; }
            if (arrayOfNumbers[i] % 2 == 0) { evenNumbers++; }
        }
    oddNumbers = arrayOfNumbers.length - evenNumbers;
    console.log(negativeNumbers, positiveNumbers, evenNumbers, oddNumbers);
    RandomNumbersResult = RandomNumbersResult.substr(RandomNumbersResult.indexOf(" ") + 1);
    document.getElementById('RandomNumbersResult').innerHTML = RandomNumbersResult;
    document.getElementById("numDesc").style.visibility = "visible";
    document.getElementById("negativeNumbers").innerHTML = negativeNumbers.toString();
    document.getElementById("positiveNumbers").innerHTML = positiveNumbers.toString();
    document.getElementById("oddNumbers").innerHTML = oddNumbers.toString();
    document.getElementById("evenNumbers").innerHTML = evenNumbers.toString();

    }