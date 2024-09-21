var x = document.getElementById("numberone");
var y = document.getElementById("numbertwo");
var z = document.getElementById("numberthree");
var sendd = document.getElementById("send");

sendd.addEventListener("click", function() {
    x = parseFloat(x.value);
    y = parseFloat(y.value);
    z = parseFloat(z.value);

    var summ = x + y + z;
    var multt = x * y * z;
    var divv = x / y / z;

    document.getElementById("sum").innerText = "Sum of the 3 values: " + x + " + " + y + " + " + z + " = " + summ;
    document.getElementById("mult").innerText = "Multiplication of the 3 values: " + x + " * " + y + " * " + z + " = " + multt;
    document.getElementById("div").innerText = "Division of the 3 values: " + x + " / " + y + " / " + z + " = " + divv;
});
