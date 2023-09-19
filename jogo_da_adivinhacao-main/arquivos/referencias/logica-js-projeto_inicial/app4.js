function lista4exercicio1(){

    //Criar um menu com as opções: inserir item e ver a lista.
    
    alert ("Liste de Compras!");
    let lista = [];
    let listaInteira = ""
    let opcao;    
    while (opcao !=3){

    opcao = parseInt(prompt(" - Menu - \n1 - Incluir item \n2 - Ver Lista \n3 - Sair"));

    switch (opcao){
case 1 :
    let item = prompt("Que item deseja inserir?")
    lista.push(item);
    alert ("Item Incluido");

break;
case 2 :

        // for (i=0; i < lista.length; i++){
        //     listaInteira += lista [i] + "\n"
        // }
        for (i = 0; i < lista.length; i++){
            listaInteira = listaInteira + lista[i] + "\n";
        }
        alert (listaInteira);
        listaInteira = "";

break;

case 3 :

     alert ("Saindo");
break;
default:
 alert ("Insira uma opção válida")

    }
}
}

lista4exercicio1()

