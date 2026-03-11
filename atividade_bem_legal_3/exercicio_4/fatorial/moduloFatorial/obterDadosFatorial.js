/***********************************************************************
  * Objetivo: Aplicação para obter os dados para cálculo da tabuada
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

//chamando biblioteca onde está o calculo
const calcularFatorial = require('./calcularFatorial')


// função para receber o input dos alunos
function obterDados() {
    //import da biblioteca do readline
    const readline = require('readline')


    //Cria o objeto de entrada de dados
    const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })



    //entrada do numero a calcular o fatorial
    entradaDeDados.question('Digite o numero a ser calculado o fatorial: ', function (numeroFatorial) {
        let numeroFatoriado = numeroFatorial
        if (tabuadaInicial == '') {
            console.log('o campo do numero deve ser preenchido')
            entradaDeDados.close()
        }
        
        })
    }