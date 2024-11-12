function gerarTabuadaPar() {
    const numero = parseInt(document.getElementById("numeroTabuada").value);

    const resultadoElemento = document.getElementById("resultadoTabuada");

    if (isNaN(numero) || numero<=0) {
        resultadoElemento.innerText = "Por favor, diigite um numero inteiro para realizar a tabuada.";
        return;
    }

    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    resultadoElemento.innerText = tabuada;
}

function gerarImparPar() {
    const numero = parseInt(document.getElementById("imparPar").value)

    const resultadoElemento = document.getElementById("resultadoImparPar");

    if (isNaN(numero) || numero<=0) {
        resultadoElemento.innerText = "Por favor, diigite um numero inteiro para vermos se o nuemro é Par ou Impar.";
        return;
    }

    if (numero % 2 == 0) {
        resultadoElemento.innerText = "O número " + numero + " é par"
    }

    else {
        resultadoElemento.innerText = "O número " + numero + " é impar"
    }
}

function gerarMedia() {
    const numero1 = parseFloat(document.getElementById("nota1").value);

    const numero2 = parseFloat(document.getElementById("nota2").value);

    const numero3 = parseFloat(document.getElementById("nota3").value);

    const resultadoElemento = document.getElementById("resultadoMedia");

    if (isNaN(numero1 || numero2 || numero3)){
        resultadoElemento.innerText = "Por favor, digite um número";
        return;
    }

    if(numero1<0|| numero2<0|| numero3<0){
        resultadoElemento.innerText = "Por favor, digite um número positivo";
        return;
    }

    resultadoElemento.innerText = "A media é " + ((numero1 + numero2 + numero3) / 3);
}

function gerarSomaPar() {
    const numero = parseInt(document.getElementById("somaPar").value);

    const resultadoElemento = document.getElementById("resultadoSomaPar");


    if (isNaN(numero) || numero<=0) {
        resultadoElemento.innerText = "Por favor, digite um número"
        return;
    }

    let soma = 0;

    for (let i = 2; i <= numero; i += 2) {
            soma += i;
    }


    resultadoElemento.innerText = `A soma dos números pares até ${numero} é igual a: ${soma}`;
}

function gerarValidacao(){
    const usuario = document.getElementById("usuario").value;

    const senha = document.getElementById("senha").value;

    const resultadoELemento = document.getElementById("resultadoLogin");

    if (usuario!== "admin" && senha!== "1234"){
        resultadoELemento.innerText = "usuario ou senha incorretos"
    }

    else{
        resultadoELemento.innerText = "Login bem-sucedido"
    }
}

function gerarFatorial(){
    const numero = parseInt(document.getElementById("fatorial").value);

    const resultadoElemento = document.getElementById("resultadoFatorial");
    

    if(isNaN(numero) || numero<0){
        resultadoElemento.innerText = "Digite um número inteiro e positivo por favor.";
        return;
    }

    if(numero == 0 ){
        resultadoElemento.innerText = `O resultado do número 0! é: 1`;
    }

    let resultado = 1;

    for(let i=numero; i>=2; i--){
        resultado *= i;
    }

    resultadoElemento.innerText = `O resultado do número ${numero}! é: ${resultado}`;
}