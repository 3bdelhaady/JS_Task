var namee = document.getElementById("name");
const sendd = document.getElementById("send");

sendd.addEventListener("click", function () {
    switch (namee){
        case "FCI":
            document.getElementById("message").textContent = "You’re eligible to Programing tracks";
            break;
        case "Engineering":
            document.getElementById("message").textContent = "You’re eligible to Network and Embedded tracks";
            break;
        case "Commerce":
            document.getElementById("message").textContent = "You’re eligible to ERP and Social media tracks";
            break;
        default:
            document.getElementById("message").textContent = "You’re eligible to SW fundamentals track";
            break;
    }
})