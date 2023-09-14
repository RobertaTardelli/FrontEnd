// Exercício 01
// Escreva um programa que receba 2 números e faça a soma entre eles. 
// ( Utiliza alert( ) e prompt( ) )
function exercicio01() {
    let numero1;
    let numero2;
    let resultado;
    
    //Perguntar o numero1 e o 2
    numero1 = prompt("Digite um número: ");
    numero2 = prompt("Digite outro número: ");
    
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    resultado = numero1 + numero2;
    
    alert(`O resultado da some de ${numero1} com ${numero2} = ${resultado}`);
}

// Exercício 02
// Escreva um programa que pergunte o nome e o sobrenome do usuário 
// e escreva na tela: "Olá, -usuário-".
function exercicio02() {
    let nome; 
    let sobrenome;

    nome = prompt("Qual seu primeiro nome?");
    sobrenome = prompt("Qual seu sobrenome?")

    alert(`Olá, ${nome} ${sobrenome}, seja bem vindo!`)
}

// Exercício 03
// Escreva uma calculadora que receba um valor em reais e converta 
// para dólar. Considere o valor do dólar a R$4,95.
function exercicio03(){
    let valorEmReal;
    let multiplicadorDolar = 4.93;
    let cotacao;

    valorEmReal = prompt("Qual valor que deseja converter?");
    cotacao = valorEmReal/multiplicadorDolar;
    cotacao = cotacao.toFixed(2)
    console.log(cotacao);
}

// Exercício 04
// Construa um algoritmo que leia um número inteiro na tela 
// e responda o número antecessor e o sucessor.

// Exercício 05
// Construa um algoritmo que calcule o valor de um terreno 
// baseado na sua área e valor por m2.

// Exercício 06
// Construa um algoritmo que leia a distância percorrida por um 
// veículo em km e o total gasto em combustível em litros. 
// No final deverá ser respondido o consumo médio deste veículo em km/l.

// Exercício Extra 
// Aproveite o programa do exercício 1 e refatore para que agora 
// ele consiga fazer cálculos com as 4 operações (+, - * e /). 

exercicio03();



