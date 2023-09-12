


function exercicio1 () {

    alert ("Soma");
    
    let num1 = prompt ("Digite o primeiro Número");
    let num2 = prompt ("Digite o segundo Número");
    
    let resultado = parseInt(num1) + parseInt(num2);
    
    alert ( "O resultado da soma é: " + resultado);
    }
    
    function exercicio2 (){
    
    alert ("Identificação");
    
    let nome = prompt("Qual o seu nome");
    let sobrenome = prompt("Qual seu sobrenome");
    
    alert (`Seja bem vindo, ${nome} ${sobrenome}!`);
    }
        
    function exercicio3 () {

    let valorEmReal;
    let multiplicadorDolar = 4.93;
    let cotacao

    
    alert ("Conversão para Dólar");
    
    
    let reais = prompt ("Digite o valor em Real");
    dolar = real / 4.95;
    
    alert (`Com R$ ${real}, você terá:  $${dolar}`);
        
    }
    
    function exercicio4 (){
    
    alert ("Antecessor e Sucessor");
    
    num = prompt ("Digite um número inteiro!");
    let antecessor = num - 1;
    let sucessor = parseInt(num) + 1;
    
    alert (`Seu numero digitado é: ${num} \nSeu antecessor é: ${antecessor}\nSeu sucessor é: ${sucessor}`);
        
    }
    
    function exercicio5 () {
       alert("Terreno")
    
       var valorM2 = parseFloat(prompt("Digite o valor por metro² do terreno."));
       var area = parseFloat(prompt("Digite o tamanho do terreno em M²."));
       let resultado = parseFloat(valorM2 * area);
    
       while (valorM2 == 0 | area == 0) {
          alert("O valor tem que ser diferente de zero!");
          
       var valorM2 = parseFloat(prompt("Digite o valor por metro² do terreno."));
       var area = parseFloat(prompt("Digite o tamanho do terreno em M²."));
    }
       resultado = parseFloat(valorM2 * area);
       alert(`O valor do seu terreno é: ${resultado}`);
       
    
    }
    
    function exercicio6 () {
    
        
    alert ("Cálculo de combustivel");
       kms = prompt ("Quantos kms foram percorridos pelo seu carro?");
    
       litros = prompt ("E quantos litros de combustivel foram gastos?");
    
       let resultado = litros / kms;
    
       if (kms || litros == 0) {
          alert("Carro novo zero km/s");
       }else {
       alert (`Seu carro consome em média ${resultado} litros por Km/s`);
       }
    }
           
    
    
     function exercicio7 () {
       alert ("Calculadora");
       
       var numero1 = prompt("Digite um número");
       var numero2 = prompt("Digite outro número");
       var opcao = prompt("Escolha a operação: \n1.Soma \n2.Subtração \n3.Divisão \n4.Multiplicação");
       
       
       while (opcao != 1 || opcao != 2 ||opcao != 3 || opcao != 4) {
          alert("Essa opção não existe, escolha novamente");
       
          var numero1 = prompt("Digite um número");
          var numero2 = prompt("Digite outro número");
          var opcao = prompt("Escolha a operação: \n1.Soma \n2.Subtração \n3.Divisão \n4.Multiplicação");
       
          if (opcao == 1) {
             var soma = parseInt(numero1) + parseInt(numero2);
             alert(`O resultado da soma é: ${soma}`);
             break;
             
             
          }else if (opcao == 2) {
             var sub = numero1 - numero2;
             alert(`O resultado da subtração é: ${sub}`);
                break;
             
          }else if (opcao == 3) {
             var div = numero1 / numero2;
             alert(`O resultado da divisão é: ${div}`);
                break;
             
          }else {
             (opcao == 4)
             var mult = numero1 * numero2;
             alert (`O resultado da multiplicação é: ${mult}`);
             break;
          }
          }
          }
    