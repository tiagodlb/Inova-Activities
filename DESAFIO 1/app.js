function createButton(title, func) {

    const btn = document.createElement('button');
    const lbl = document.createTextNode(title);
    btn.appendChild(lbl);
    btn.addEventListener("click", eval(func), false);
    document.body.appendChild(btn);
}

function createP() {
    const p = document.createElement('p');
    document.body.appendChild(p);
    p.setAttribute('id', "p1");
}

function questao1() {
    let arg = (prompt("Escreva as notas: Ex.: 1,2,3")).split(',').map((x) => parseInt(x));
    function media(arr) {
        if (arr.length < 2) return alert("Insira mais de 1 elemento")
        arr.length != 0 || typeof arr == Array ? arr : alert("Alguma coisa deu errado!");
        let somatorio = 0
        for (i = 0; i < arr.length; i++) {
            somatorio += arr[i]
        }

        console.log(somatorio / arr.length);
        return somatorio / arr.length
    }

    let value = media(arg);
    document.getElementById("p1").textContent = "Resposta: " + String(value);

}
function questao2() {
    let arg = (prompt("Escreva as notas: Ex.: 1,2,3")).split(',').map((x) => parseInt(x));
    function maiorMenor(arr) {
        if (arr.length < 2) return alert("Insira mais de 1 elemento")
        arr.length != 0 || typeof arr != Array ? arr : alert("Alguma coisa deu errado!");
        let bigger = 0
        let smaller = arr[0]
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > bigger) bigger = arr[i]
            if (arr[i] < smaller) smaller = arr[i]
        }
        return `O maior número é ${bigger} e o menor ${smaller}`
    }
    let value = maiorMenor(arg)
    document.getElementById("p1").textContent = "Resposta: " + String(value);

}
function questao3() {
    const arr = [12, 5, 23, 17, 8, 14, 3, 19]
    function organiza(arr) {
        //Selection sort
        let myArr = arr;
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (myArr[j] < myArr[min]) {
                    min = j;
                }
            }
            if (min != i) {
                let tmp = myArr[i];
                myArr[i] = myArr[min];
                myArr[min] = tmp;
            }
        }
        return myArr;
    }
    let value = organiza(arr);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao4() {
    const arr = [23, 16, 11, 8, 19, 14, 5, 21]
    function achaPrimo(arr) {
        let myArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0 && arr[i] % 3 != 0) myArr.push(arr[i])
        }
        return myArr;
    }
    let value = achaPrimo(arr);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao5() {
    const phrase = "What is Lorem Ipsum?"
    function count(str) {
        let myStr = str.split(" ");
        return myStr.length;
    }
    let value = count(phrase);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao6() {
    function factorial(num) {
        if (num === 0) return 1;
        else return num * factorial(num - 1);
    }
    let value = factorial(12);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao7() {
    function sum(arr) {
        let a = 0;
        for (let i = 0; i < arr.length; i++) {
            a += arr[i];
        }
        return a;
    }
    let value = sum([2.50, 3.75, 1.99]);
    document.getElementById("p1").textContent = "Resposta: R$" + String(value);
}
function questao8() {
    function multa(n) {
        let a = 0;
        for (let i = 0; i < n; i++) {
            a += .5;
        }
        return a;
    }
    let value = multa(7);
    document.getElementById("p1").textContent = "Resposta: R$" + String(value);
}
function questao9() {
    function hp(n) {
        let a = 100;
        for (let i = 0; i < n; i++) {
            a -= 20;
        }
        return a;
    }
    let value = hp(3);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao10() {
    function upperCaseCounter(str) {
        let myStr = str.split(" ").join("").split("");
        console.log(myStr)
        let counter = 0
        for (let i = 0; i < myStr.length; i++) {
            if (myStr[i] === myStr[i].toUpperCase()) counter++
        }
        return counter;
    }
    let value = upperCaseCounter("LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY");
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}
function questao11() {
    let arg = (prompt("Digite a sua data de nascimento: Ex.: 2002-05-03")).split('-').map((x) => parseInt(x));
    function idade(arr) {
        let today = new Date();
        if (arr[1] === (today.getMonth() + 1)) {
            return today.getFullYear - arr[0]
        } else {
            return today.getFullYear() - arr[0] - 1;
        }
    }

    let value = idade(arg);
    document.getElementById("p1").textContent = "Resposta: " + String(value);
}

for (i = 1; i < 12; i++) {
    createButton(`questão ${i}`, `questao${i}`);
}
createP();