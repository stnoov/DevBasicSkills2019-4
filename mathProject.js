

function conversion() {
    var fromSystem = document.getElementById("systemFrom").value;
    var toSystem = document.getElementById("systemTo").value;
    var numberFromUser = document.getElementById("numberFromUser").value;
    var resultField = document.getElementById("conversionResult");
    var output = [];
    var sNumber = numberFromUser.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    function isArrayBool(output) {
        for (var i of output) {
             if (i !== 0 && i !== 1) return false;
        }
        return true;
    }


    if (fromSystem == toSystem) {
        alert("ERROR! Please, chose correct number system to convert")
    } if (fromSystem == "Binary" && isArrayBool(output) == false) {
        alert("ERROR! Please, type correct binary number")
    }

    if (fromSystem == "Decimal" && toSystem == "Binary") {
        var result = ((numberFromUser*1).toString(2));
        resultField.innerHTML = result;
    } else if (fromSystem == "Decimal" && toSystem == "Octal") {
        var result = ((numberFromUser*1).toString(8));
        resultField.innerHTML = result;
    } else if (fromSystem == "Decimal" && toSystem == "Hex") {
        var result = ((numberFromUser*1).toString(16));
        result = result.toUpperCase();
        resultField.innerHTML = result;

    }
    if (fromSystem == "Binary" && toSystem == "Decimal") {
        var result = parseInt(numberFromUser, 2);
        resultField.innerHTML = result;
    } else if (fromSystem == "Binary" && toSystem == "Octal") {
        var result = parseInt(numberFromUser, 2).toString(8);
        resultField.innerHTML = result;
    } else if (fromSystem == "Binary" && toSystem == "Hex") {
        var result = parseInt(numberFromUser, 2).toString(16);
        result = result.toUpperCase();
        resultField.innerHTML = result;
    }

    if (fromSystem == "Octal" && toSystem == "Decimal") {
        var result = parseInt(numberFromUser, 8);
        resultField.innerHTML = result;
    } else if (fromSystem == "Octal" && toSystem == "Binary") {
        var result = parseInt(numberFromUser, 8).toString(2);
        resultField.innerHTML = result;
    } else if (fromSystem == "Octal" && toSystem == "Hex") {
        var result = parseInt(numberFromUser, 8).toString(16);
        result = result.toUpperCase();
        resultField.innerHTML = result;
    }

    if (fromSystem == "Hex" && toSystem == "Decimal") {
        var result = parseInt(numberFromUser, 16);
        resultField.innerHTML = result;
    } else if (fromSystem == "Hex" && toSystem == "Binary") {
        var result = parseInt(numberFromUser, 16).toString(2);
        resultField.innerHTML = result;
    } else if (fromSystem == "Hex" && toSystem == "Octal") {
        var result = parseInt(numberFromUser, 16).toString(8);
        result = result.toUpperCase();
        resultField.innerHTML = result;
    }
}

function resetConversion() {
    var fromSystem = document.getElementById("systemFrom");
    fromSystem.value = fromSystem.defaultValue;
    var toSystem = document.getElementById("systemTo")
    toSystem.value = toSystem.defaultValue;
    var numberFromUser = document.getElementById("numberFromUser")
    numberFromUser.value = numberFromUser.defaultValue;
    var resultField = document.getElementById("conversionResult");
    resultField = 0;
}