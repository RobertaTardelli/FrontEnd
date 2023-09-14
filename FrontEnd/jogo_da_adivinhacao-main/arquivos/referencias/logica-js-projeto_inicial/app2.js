function exercicio1() {

   let numero = prompt("Digite um numero:");

   if (numero == 0) {
      alert("É ZERO ");
   }
   if (numero % 2 == 1) {
      alert("O número é impar");
   }
   if (numero % 2 == 0) {
      alert("O número é par");
   }
}

function exercicio2() {

   numero1 = parseInt(prompt("Primeiro número"));
   numero2 = parseInt(prompt("Segundo número"));

   if (numero1 > numero2) {
      alert(`${numero1} é maior que ${numero2}`);
   }
   else if (numero1 < numero2) {
      alert(`${numero1} é menor que ${numero2}`);
   }
   else if (numero1 == numero2) {
      alert(`${numero1} é igual a ${numero2}`);
   }

}

function exercicio3() {

   let idoso = prompt("Voce é maior de 65 anos? (sim ou não)");
   let deficiente = prompt("Voce é deficiente físico? (sim ou não)");
   let gestante = prompt("Voce é gestante? (sim ou não)");

   if (idoso == "sim" || deficiente == "sim" || gestante == "sim") {
      alert(" Fila Preferencial");

   } else {
      alert("Fila Comum");
   }

}

function exercicio4() {

   let idade = parseInt(prompt("Qual é a sua idade?"));

   if (idade < 16) {
      alert("Entrada Proibida");
   }
   else if (idade >=16 && idade < 18) {
      alert("Entrada Liberada com Acompanhante");
   }
   else {
      alert("Entrada Liberada");
   }

}
function exercicio5() {

   let login = ("Henrique");
   let senha = ("1234");
   let loginDigitado = prompt("Digite seu nome!");
   let senhaDigitada = prompt("Digite sua senha!");
   
   if ((loginDigitado == login) && (senhaDigitada == senha)) {
      alert("Bem Vindo!");
   }
   else if ((loginDigitado != login) && (senhaDigitada != senha)){
      alert("Login e Senha Incorretos");
   }
   else if (loginDigitado != login){
      alert("Login incorreto!");
   }
   else {
      alert("Senha Incorreta!");
      
   }
}

function exercicio6(){
   
   let primeiraPergunta = parseInt(prompt("Qual a cor do cavalo Branco de Napoleão? \n1. cavalo \n2. branco \n3. Napoleão"));
   let segundaPergunta = parseInt(prompt("O Rato do Rei de Roma roeu o que? \n1. roupa \n2. preto \n3. pé"));
   let terceiraPergunta = parseInt(prompt("QUEM DESCOBRIU O BRASIL? \n1. Indios \n2. Cabral \n3. Colombo" ));
   var acerto = 0;
   var erro = 0;
      if(primeiraPergunta == "2"){
         parseInt(acerto++);
       }else {
            parseInt(erro++);
         }
         
      if (segundaPergunta == "1") {
         parseInt(acerto++);
      }else{
         parseInt(erro++);
      }
      
      if (terceiraPergunta == "2"){
         parseInt(acerto++);
      }else{
         parseInt(erro++);
      
         alert(acerto);
         alert(erro);
      }

   

   }
exercicio6()



