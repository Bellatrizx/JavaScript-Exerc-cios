function verificarParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é par.`;
    } else {
        resultado.textContent = `O número ${numero} é ímpar.`;
    }
}
