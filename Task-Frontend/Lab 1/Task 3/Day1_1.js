let z = parseFloat(prompt("temperature"));

if(z>30){
    document.getElementById("messagee").textContent = "Cold or Hot : is Hot"
}else {
    document.getElementById("messagee").textContent = "Cold or Hot : is Cold"
}

let x = parseFloat(prompt("temperatureindeed"));
let y = parseFloat(prompt("temperaturefeel"));

    if(x>25&&y>25&&x<30&&y<30){
        document.getElementById("message").textContent = "normal"
    }else if(x<25&&y<25){
        document.getElementById("message").textContent = "Cold"
    }else if(x>30&&y>30){
        document.getElementById("message").textContent = "Hot"
    }else {
        document.getElementById("message").textContent = "unknown, can’t detect"
    }