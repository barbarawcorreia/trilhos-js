const trilhos = require('./main')

test('LIFO',() => {
    var valores_entrada_cte = [1,2,3,4,5]
    var valor_da_saida_esperado = [5,4,3,2,1]

    expect(trilhos.vagoes_lifo(valores_entrada_cte)).toEqual(valor_da_saida_esperado)
})


// continuar
//https://medium.com/trainingcenter/uma-vis%C3%A3o-geral-de-testes-em-javascript-em-2018-8484154caf63
