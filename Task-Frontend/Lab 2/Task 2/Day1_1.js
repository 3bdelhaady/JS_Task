var x = document.getElementById("text");
var sendd = document.getElementById("send");
var conf = confirm("Consider case sensitivity? (OK for Yes, Cancel for No)");

sendd.addEventListener("click", function() {
    var str = x.value;
    
    if (!conf) {str = str.toLowerCase();}

    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '');
    var isPalindrome = cleanedStr === cleanedStr.split('').reverse().join('');

    if (isPalindrome) {console.log(`"${str}" is a palindrome.`);
    } else {console.log(`"${str}" is not a palindrome.`);}
});
