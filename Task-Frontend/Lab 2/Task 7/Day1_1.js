var a = document.getElementById("numberone");
var sendd = document.getElementById("send");

sendd.addEventListener("click", function() {
    a = parseFloat(a.value);

    document.getElementById("one").innerText = "cos " + a +"° is " + Math.cos(a);
    });