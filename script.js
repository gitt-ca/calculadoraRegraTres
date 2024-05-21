function calcRegraDeTres() {
    var numero1 = document.getElementById("num1").value;
    var numero2 = document.getElementById("num2").value;
    var numero3 = document.getElementById("num3").value;

    // Verificando se os valores são números válidos
    if (numero1 === "" || numero2 === "" || numero3 === "") {
        return "Por favor, preencha todos os campos.";
    }

    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    var valor3 = parseFloat(numero3);

    // Verificando se os valores são números válidos após a conversão
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        return "Por favor, insira apenas números válidos.";
    }

    // Calculando o valor de 'x'
    var x = (valor3 * valor2) / valor1;
    x = x.toFixed(2);

    return parseFloat(x); 

}

function printMessage() {
    var resultado = calcRegraDeTres();
    if (typeof resultado === 'number') {
        var message = "O resultado de X é " + resultado;
        alert(message);
    } else {
        alert(resultado);
    }
}
