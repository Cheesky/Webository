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

    return convert();
}
function convert(){
    if(opsi === true){
        // Fahrenheit to Celcius
        input = document.getElementById("input").value;
        output = (input - 32)/1.8;
        output = Math.round(output).toFixed(1);
        document.getElementById("result-sidepanel").innerHTML = output;
        document.getElementById("result").innerHTML = output;
        document.getElementById("calculate-detail").innerHTML = "S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+input+"- 32) / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+(input - 32)+") / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+(input - 32)/1.8+")";
    }
    else{
        // Celcius to Fahrenheit
        input = document.getElementById("input").value;
        output = (input * 1.8)+32;
        output = Math.round(output).toFixed(1);
        document.getElementById("result-sidepanel").innerHTML = output;
        document.getElementById("result").innerHTML = output;
        document.getElementById("calculate-detail").innerHTML = "S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> &times; 1,8) + 32 <br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+input+"&times; 1,8) + 32<br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+(input * 1.8)+") + 32<br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+(input * 1.8 + 32)+")";
    }
}
if(output <= -51){
    // Unearthly Cold color rgba(60,49,151,255)
}
else if(output<=-21){
    //Extreme Cold color rgba(38,0,207,255)
}
else if(output <=0){
    //Severe Cold rgba(71,98,251,255)
}