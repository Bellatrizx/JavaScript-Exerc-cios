function calcularIdade() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    const resultado = document.getElementById('resultado');
    if (idade >= 0 && anoNascimento.length === 4) {
        resultado.textContent = `Você tem ${idade} anos.`;
    } else {
        resultado.textContent = 'Por favor, insira um ano válido.';
    }
}
