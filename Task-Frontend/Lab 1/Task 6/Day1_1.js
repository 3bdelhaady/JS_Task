var nameInput = document.getElementById("numberone");
var yearInput = document.getElementById("numbertwo");
var sendButton = document.getElementById("send");

sendButton.addEventListener('click', function() {
    var name = nameInput.value;
    var birthYear = parseInt(yearInput.value);

    if (birthYear > 2020) {
        alert("Please select a valid year of your birth");
    } else {
        var age = 2024 - birthYear;

        document.getElementById("messageo").textContent = "Name: " + name;
        document.getElementById("messaget").textContent = "Year of birth: " + birthYear;
        document.getElementById("messageth").textContent = "Age: " + age;
    }
});
