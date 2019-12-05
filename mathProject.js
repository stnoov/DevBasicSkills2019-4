

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
}

function WithSampling() {
    var divElement = document.getElementById('withSampling');
    var x = document.createElement("INPUT");
    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 
    checkbox.name = "name"; 
    checkbox.value = "value"; 
    checkbox.id = "samplingCheckbox"; 
    var label = document.getElementById('WithSamplingText');
    label.innerHTML = "With Sampling";
    divElement.appendChild(checkbox); 
    }

function chosenMethodCombinations() {
    if (document.contains(document.getElementById("samplingCheckbox"))) {
        var label = document.getElementById('WithSamplingText');
        label.innerHTML = "";
        document.getElementById('samplingCheckbox').remove();
} 
    var chosenValue = document.getElementById('chosenMethod');
    var chosenFormula = document.getElementById('chosenMethodFormula')
    chosenValue.innerHTML = "combinations";
    chosenFormula.innerHTML = "P! / R! x (P-R)!"
}

function chosenMethodPermutations() {
    var chosenValue = document.getElementById('chosenMethod');
    var chosenFormula = document.getElementById('chosenMethodFormula')
    chosenValue.innerHTML = "permutations";
    chosenFormula.innerHTML = "!P / !(P - R) "
}

function fact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function permutations(n, k) {
    var p = fact(n);
    var v = fact(n-k);
    return p/v;
}

function combinations(n, k) 
  {
    var p = fact(n);
    var v = fact(n-k);
    return p/v/fact(k);
  }

function Combinatorics() {
    
    var valueP = document.getElementById('numberFromUserP').value;
    var valueR = document.getElementById('numberFromUserR').value;
    var combinatoricsResult = document.getElementById('combinatoricsResult');

    if (document.getElementById('Combinations').checked) {
        combinatoricsResult.innerHTML = combinations(valueP,valueR);
      } else if (document.getElementById('Permutations').checked) {
        combinatoricsResult.innerHTML = permutations(valueP,valueR);
      }
    }

    function toStringToUpperCase(a, b) {
        var c;
        c = (a.toString(b));
        c = c.toString().toUpperCase();
        return (c);
    }

    function createTable() {
    document.write("<table class='tableContent' border=1> <tr><th>Decimal</th><th>Binary</th><th>Octal</th><th>Hexidecimal</th></tr>")
    for (i = 1; i < 51; i++) {
      document.write("<tr><th>" + toStringToUpperCase(i, 10) + "</th><th>   " + toStringToUpperCase(i, 2) + "</th><th>    " + toStringToUpperCase(i, 8) + "</th><th>    " + toStringToUpperCase(i, 16) + "</th></tr> ");
    }
    document.write("</table>");
    document.write("</div>");
    }
    
    function fillTable() {
        if (document.getElementById('checkButton').textContent == 'Display') {
            document.getElementById('conversionTable').style.visibility = 'visible';
            document.getElementById('checkButton').textContent = 'Hide';
    
        }
        else {
            document.getElementById('conversionTable').style.visibility = 'hidden';
            document.getElementById('checkButton').textContent = 'Display';
    
        }
    
    }   