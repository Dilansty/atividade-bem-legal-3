
//import para incrementar dados pelo terminal
var readline = require("readline");


//import para enviar e receber dados pelo terminal
var recebeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do nome do Usuário
recebeDados.question(`digite o seu nome: `, function (nomeUsuario) {
    //Entrada de dados n1
    recebeDados.question(`digite o primeiro valor da soma: `, function (n1) {
        //Entrada de dados n2
        recebeDados.question(`digite o segundo valor da soma: `, function (n2) {
            //Entrada de dados n3
            recebeDados.question(`digite o último valor da soma: `, function (n3) {

                //Soma dos valores. A classe Number converte uma String para Number
                var somaTotal = Number(n1) + Number(n2) + Number(n3);

                console.log(`O nome do usuário é : ${nomeUsuario}`);
                console.log(`a soma dos numeros ${n1}, ${n2} e ${n3} é: ${somaTotal} `);

            });//Fecha N3
        });//Fecha N2
    });//Fecha N1
});//Fecha o nome do Usuário

