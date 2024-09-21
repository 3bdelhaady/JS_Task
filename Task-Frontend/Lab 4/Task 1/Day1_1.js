// Button to show alert message and change ID to "al"
document.getElementById("sendone").addEventListener("click", function() {
    alert("Welcome to my site");
});

// Button to change background color of the element with ID "al"
document.getElementById("sendtwo").addEventListener("click", function() {
    document.getElementById("textone").style.color = "red";
});
