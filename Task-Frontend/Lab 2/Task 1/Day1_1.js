var stringInput = document.getElementById("string");
var sendButton = document.getElementById("send");
var messageElement = document.getElementById("message");
var n = 0;

sendButton.addEventListener('click', function() {
    var str = stringInput.value;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            n++;
        }
    }

    var ms = "The number of 'e' characters in the string is: " + n;
    messageElement.innerHTML = ms;
});
