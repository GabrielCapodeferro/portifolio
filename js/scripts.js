function calcular(operacao) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('output').innerText = "Por favor, insira os dois primeiros números!";
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2 + (isNaN(num3) ? 0 : num3);
            break;
        case '-':
            resultado = num1 - num2 - (isNaN(num3) ? 0 : num3);
            break;
        case '*':
            resultado = num1 * num2 * (isNaN(num3) ? 1 : num3);
            break;
        case '/':
            if (num2 === 0 || (num3 === 0 && !isNaN(num3))) {
                document.getElementById('output').innerText = "Não é possível dividir por zero!";
                return;
            }
            resultado = num1 / num2 / (isNaN(num3) ? 1 : num3);
            break;
    }

    document.getElementById('output').innerText = resultado;
}
