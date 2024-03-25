alert("Boas vindas ao nosso site!");

const secretNumber = 29;
game();

function extra() {
    const name = prompt("Me diz o teu nome!");
    const idade = parseInt(prompt("Me diz a tua idade!"));
    const numeroDeVendas = 50;
    const saldoDisponível = 1000;
    let mensagemDeErro = "Erro! Preencha todos os campos";
    alert(mensagemDeErro);
    idade >= 18 ? alert("Pode tirar a habilitação!") : alert("Não pode tirar habilitação!");
}

function game() {
    let isTrue = false;
    let attempt = parseInt(prompt("Escolha um número entre 1 e 30"));
    switch (attempt) {
        case 29:
            alert(`Você acertou, o número secreto é ${secretNumber}`);
            isTrue = true;
            break;
        default:
            alert("Você errou :(");
    }
    if (!isTrue) game();
}