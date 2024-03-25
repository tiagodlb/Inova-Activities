alert("Boas vindas ao nosso site!");

const secretNumber = parseInt((Math.random()) * 30 + 1);
console.log(secretNumber)
let numberAttempt = 1;
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
    if (attempt < secretNumber) {
        alert("O seu chute é menor que o número secreto");
        numberAttempt++;
    } else if (attempt > secretNumber) {
        alert("O seu chute é maior que o número secreto");
        numberAttempt++;
    } else {
        alert(`Você acertou em ${numberAttempt} ${numberAttempt > 1 ? 'tentativas' : 'tentativa'}! O número secreto era ${secretNumber}`);
        isTrue = true;
    }
    if (!isTrue) game();
    return;
}