alert("Welcome to my site!");

var x = document.getElementById("username");
var y = document.getElementById("send");

y.addEventListener('click', function() {
    var username = x.value;
    document.getElementById("message").textContent = 'Welcome ' + username;
});