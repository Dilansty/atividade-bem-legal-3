/***********************************************************************
  * Objetivo: Aplicação para obter os dados para cálculo da tabuada
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

const calculoMedia = require('./calcularTabuada')




function VerificarExame() {

}


// função para receber o input dos alunos
function obterDados() {
    //import da biblioteca do readline
    const readline = require('readline')

    //Cria o objeto de entrada de dados
    const entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })



    //entrada da tabuada inicial
    entradaDeDados.question('Digite a tabuada inicial: ', function (tabuadaInicial) {
        let primeiraTabuada = tabuadaInicial
        if (tabuadaInicial == '') {
            console.log('o campo "tabuada inicial" deve ser preenchido')
            entradaDeDados.close()
        }
        entradaDeDados.question('Digite a tabuada final: ', function (tabuadaFinal) {
            let ultimaTabuada = tabuadaFinal
            if (tabuadaFinal == '') {
                console.log('o campo "tabuada Final" deve ser preenchido')
                entradaDeDados.close()
            }
            entradaDeDados.question('Digite qual numero inicia a tabuada: ', function (numeroInicial) {
                let primeiroNumero = numeroInicial
                if (numeroInicial == '') {
                    console.log('o campo do numero inicial deve ser preenchido')
                    entradaDeDados.close()
                }

                entradaDeDados.question('Digite o ultimo multiplicador da tabuada: ', function (numeroFinal) {
                    let ultimoNumero = numeroFinal
                    if (numeroFinal == '') {
                        console.log('o campo "ultimo multiplicador" deve ser preenchido')
                        entradaDeDados.close()
                    }



                })
            })
        })
    })
}

module.exports = {
    obterDados
}
