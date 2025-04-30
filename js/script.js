var input = 0;
var output = 0;
var opsi = false;
document.getElementById("label-input").innerHTML = "Celcius (&deg;C)";
document.getElementById("label-output").innerHTML = "Fahrenheit (&deg;F)";

function reverse(){
    opsi = !opsi;
    if(opsi == true){
        document.getElementById("label-input").innerHTML = "Fahrenheit (&deg;F)";
        document.getElementById("label-output").innerHTML = "Celcius (&deg;C)";
    }
    else{
        document.getElementById("label-input").innerHTML = "Celcius (&deg;C)";
        document.getElementById("label-output").innerHTML = "Fahrenheit (&deg;F)";
    }
    return opsi;
}
function convert(){
    alert(opsi);
    if(opsi === true){
        // Fahrenheit to Celcius
        input = document.getElementById("input").value;
        output = (input - 32)/1.8;
        document.getElementById("result-sidepanel").innerHTML = output;
        document.getElementById("result").innerHTML = output;
    }
    else{
        // Celcius to Fahrenheit
        input = document.getElementById("input").value;
        output = (input * 1.8)+32;
        document.getElementById("result-sidepanel").innerHTML = output;
        document.getElementById("result").innerHTML = output;
    }
}