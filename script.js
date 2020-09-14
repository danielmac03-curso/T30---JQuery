var num1 = "";
var num2 = "";
var resultado = 0;
var primerNumero = true;
var operador = null;

$("#retr").click(function(){
    if(primerNumero){
        if(String(num1).length>1){
            num1 = String(num1).slice(0, -1);
        }else{
            num1 = "";
        }
    }else{
        if(String(num2).length>1){
            num2 = String(num2).slice(0, -1);
        }else{
            num2 = "";
        }
    }
    
    mostrarResultado();
});

$("#CE").click(function(){
    reiniciar();
    num1 = "";
});

$("#C").click(function(){
    if(primerNumero){
        num1 = "";
    }else{
        num2 = "";
    }
    
    $("#pantalla").val("");
});

$("#point").click(function(){
    if(primerNumero){
        if(String(num1).includes(".") == false){
            num1 += ".";
        }
    }else{
        if(String(num2).includes(".") == false){
            num2 += ".";
        }
    }
});

$("#cambiarSigno").click(function(){
    if(primerNumero){
        if(String(num1).charAt(0) != "-"){
            num1 = "-" + num1;
        }else{
            num1 = String(num1).slice(1);
        }
    }else{
        if(String(num2).charAt(0) != "-"){
            num2 = "-" + num2;
        }else{
            num2 = String(num2).slice(1);
        }
    }
    
    mostrarResultado();
});

$(".numero").click(function(){
    if(primerNumero){
        num1 += $(this).html();
    }else{
        num2 += $(this).html();
    }

    mostrarResultado();
});

$(".operador").click(function(){
    primerNumero = false;
    operador = $(this).html();

    $("#pantalla").val("");
});

$("#calcular").click(function(){
    switch(operador){
        case "+":
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case "-":
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case "*":
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        case "%":
            resultado = parseFloat(num1) % parseFloat(num2);
            break;
    }

    reiniciar();
});

$("#raiz").click(function(){
    resultado = Math.sqrt(parseFloat(num1));

    reiniciar();
});

$("#1divideX").click(function(){
    resultado = 1/parseFloat(num1);

    reiniciar();
});

function reiniciar(){
    num1 = resultado;
    num2 = "";
    resultado = 0;
    primerNumero = true;
    operador = null;
    mostrarResultado();
}

function mostrarResultado(){
    if(primerNumero){
        $("#pantalla").val(num1);
    }else{
        $("#pantalla").val(num2);
    }
}