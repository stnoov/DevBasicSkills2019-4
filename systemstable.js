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