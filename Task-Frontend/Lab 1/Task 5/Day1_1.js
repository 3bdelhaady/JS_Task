var x = document.getElementById("numberone");
var y = document.getElementById("numbertwo");
var sendd = document.getElementById("send");

var ms = "";
sendd.addEventListener('click', function() {
     x = parseInt(x.value);
     y = parseInt(y.value);

     for (let i = x; i <= y; i++) {
            if (i % 2 === 1) {
                ms += i + " ";
            }
        }
        document.getElementById("message").textContent = ms;
});
