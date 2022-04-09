var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("GANASTE con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "GANASTE con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("GANASTE con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};