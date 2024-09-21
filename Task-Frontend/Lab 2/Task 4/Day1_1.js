var a = document.getElementById("numberone");
var b = document.getElementById("numbertwo");
var c = document.getElementById("numberthree");
var d = document.getElementById("numberfour");
var e = document.getElementById("numberfive");
var sendd = document.getElementById("send");

sendd.addEventListener("click", function() {
    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);
    d = parseFloat(d.value);
    e = parseFloat(e.value);

    var x = [a,b,c,d,e];
    x.sort(function(num1, num2) { return num1 - num2; });

    document.getElementById("one").innerText = "First value is: " + x[0];
    document.getElementById("two").innerText = "Second value is: " + x[1];
    document.getElementById("three").innerText = "Third value is: " + x[2];
    document.getElementById("four").innerText = "Fourth value is: " + x[3];
    document.getElementById("five").innerText = "Fifth value is: " + x[4];
    });