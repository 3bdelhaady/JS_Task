var a = document.getElementById("numberone");
var sendd = document.getElementById("send");

sendd.addEventListener("click", function() {
    a = parseFloat(a.value);

    document.getElementById("one").innerText = "squar root of " + a +" is " + Math.sqrt(a);
    });