function WithSampling() {
    var x = document.getElementById("withSampling");
    if (window.getComputedStyle(x).visibility === "hidden") {
    x.style.visibility = "visible";
  }
}
function chosenMethodCombinations() {
    var x = document.getElementById("withSampling");
    if (window.getComputedStyle(x).visibility === "visible") {
    x.style.visibility = "hidden";
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
    chosenFormula.innerHTML = "!P / !(P - R) ";
}

function fact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function permutations(n, k) {
    if (n == k ) {
        return 1
    } else {
    var p = fact(n);
    var v = fact(n-k);
    return p/v;
    }
}

function combinations(n, k) 
  {
    var p = fact(n);
    var v = fact(n-k);
    return p/v/fact(k);
  }

function permutationsWithSampling(n,k) {
    return fact(n);
}

function checkBoxSet() {
  var chosenValue = document.getElementById('chosenMethod');
  var chosenFormula = document.getElementById('chosenMethodFormula');
  if ( ! (document.querySelector('.checkbox').checked)) {
    chosenValue.innerHTML = "permutations";
    chosenFormula.innerHTML = "!P / !(P - R) ";
    document.getElementById("RValue").style.visibility = "visible"
  } else if (document.querySelector('.checkbox').checked) {
    document.getElementById("RValue").style.visibility = "hidden"
    chosenValue.innerHTML = "permutations without repetitions";
    chosenFormula.innerHTML = "!P";
    
  }


}

function Combinatorics() {   
    var valueP = document.getElementById('numberFromUserP').value;
    var valueR = document.getElementById('numberFromUserR').value;
    var combinatoricsResult = document.getElementById('combinatoricsResult');
    if (document.getElementById('Combinations').checked) {
        combinatoricsResult.innerHTML = combinations(valueP,valueR);
      } else if (document.getElementById('Permutations').checked && document.querySelector('.checkbox').checked) {
        combinatoricsResult.innerHTML = permutationsWithSampling(valueP,valueR);
      } else if (document.getElementById('Permutations').checked)  {
        combinatoricsResult.innerHTML = permutations(valueP,valueR);
      }
    }