var x = document.getElementById("numberone");
var sendd = document.getElementById("send");

sendd.addEventListener("click", function() {
    x = parseFloat(x.value);
    
    var area = Math.PI * Math.pow(x,2);
    document.getElementById("sum").innerText = "Total area of The Cirde is: " + area;
});
