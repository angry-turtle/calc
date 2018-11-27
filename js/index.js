function plus() {
    var n1, n2, result

    n1 = document.getElementById("num1").value;
    n1 = parseFloat(n1);

    n2 = document.getElementById("num2").value;
    n2 = parseFloat(n2);

    result = n1 + n2;
    result = document.getElementById("out").innerHTML = result;
}

function minus() {
    var n1, n2, result

    n1 = document.getElementById("num1").value;
    n1 = parseFloat(n1);

    n2 = document.getElementById("num2").value;
    n2 = parseFloat(n2);

    result = n1 - n2;
    result = document.getElementById("out").innerHTML = result;
}

function multiplication() {
    var n1, n2, result

    n1 = document.getElementById("num1").value;
    n1 = parseFloat(n1);

    n2 = document.getElementById("num2").value;
    n2 = parseFloat(n2);

    result = n1 * n2;
    result = document.getElementById("out").innerHTML = result;
}

function division() {
    var n1, n2, result

    n1 = document.getElementById("num1").value;
    n1 = parseFloat(n1);

    n2 = document.getElementById("num2").value;
    n2 = parseFloat(n2);

    result = n1 / n2;
    result = document.getElementById("out").innerHTML = result;
}
