function exercicio1() {


    do
        numero = prompt("Digite seu número de segundos");
    while (numero > 59 || numero < 1);
    for (i = 1; i <= numero; i++) {
        console.log(i)
    }
}
// Prompt - pede algo do usuário (escreva algo).
// console.log - escreve no painel de desenvolvedor 
// parsenInt - transforma de string para Int - conversor para inteiro
// do - faça
//while - Enquanto
// for - sempre tem tres blocos - referencia / condição / ação 
// `` - para escrever textos, fazer interpolação traz 
//i
// float - é flutuante - casas decimais  

function exercicio2() {
    numero = prompt("Coloque um número");
    for (let i = 1; i <= 9; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

function exercicio3() {

    //receba dois números inteiros
    numero1 = parseInt(prompt("Primeiro número"));
    numero2 = parseInt(prompt(`Segundo número" \n (obs: o número deve ser maior ou igual a ${numero1 + 3}`));

    //loop que verifica se o segundo é pelo menos 3+

    //loop ecrever de num 1 até num 2
    if (numero2 >= (numero1 + 3)) {
        // for(let i=0; i<=10; i++)
        for (let i = numero1; i <= numero2; i++) {
            //só se for par
            alert(numero1);
            if ((i % 2) == 0) {
                alert(i);
            }

        }
    }
}
//else {
// alert ("Número inválido.")
//while (numero2 <(numero1+3));


// se for impar vai pular

//numero1 = parseInt(prompt("Primeiro número"));
// numero2 = parseInt(prompt("Segundo número"));
//for( let l = numero1; l < numero2; l++){
//  if (l%2 == 0 ){
//console.log(l);


function exercicio5() {

    let login = ("Roberta@gmail.com");
    let senha = ("1234");


    let loginDigitado;
    let senhaDigitada;


    let tentativa = 3;

    function verificaTentativastentativas() {
        if (tentativa != 0) {
            tentativa--;
            console.log(`${tentativa} tentaviva(s) restante(s)`);

        } else {
            tentativa--;
            alert("Acesso Bloqueado!");
        }

        do {
            let loginDigitado = prompt("Login:");
            let senhaDigitada = prompt("Senha:");


            if ((loginDigitado == login) && (senhaDigitada == senha)){
                alert("Bem vindo Roberta!");
            } else if ((loginDigitado != login) || (senhaDigitada != senha)) {
                alert("Login ou Senha Inválido!");
                verificaTentativas();
            }
        } while (tentativa > 0);
    }
}



    exercicio5()
