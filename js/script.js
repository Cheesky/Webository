var input = 0;
var output = 0;
var reversed = False;

function convert(){
    input = document.getElementById("input").value;
    output = (input * 1.8) + 32;
    alert(output);
    document.getElementById("result").innerHTML = output;
    document.getElementById("result-sidepanel").innerHTML = output;
}

function reverse() {
	reversed = !reversed;
	if(reversed = True){
        document.getElementById("label-input").innerHTML = "Fahrenheit (&deg;F)";
        document.getElementById("label-output").innerHTML = "Celcius (&deg;C)";
    }
    else{
        document.getElementById("label-output").innerHTML = "Fahrenheit (&deg;F)";
        document.getElementById("label-input").innerHTML = "Celcius (&deg;C)";
    }
}