// const vagoes_lifo = require('./main')
const vagoes = require('./main');

test('LIFO',() => {
    var valores_entrada_cte = [1,2,3,4,5]
    var valor_da_saida_esperado = [5,4,3,2,1]
    expect(vagoes.vagoes_lifo(valores_entrada_cte)).toEqual(valor_da_saida_esperado)
})


//https://medium.com/trainingcenter/uma-vis%C3%A3o-geral-de-testes-em-javascript-em-2018-8484154caf63

test('FIFO',() => {
    var valores_entrada_cte = [1,2,3,4,5]
    var valor_da_saida_esperado = [1,2,3,4,5]
    console.log(vagoes.vagoes_fifo(valores_entrada_cte))
    expect(vagoes.vagoes_fifo(valores_entrada_cte)).toEqual(valor_da_saida_esperado)
})

// cobrir o outro cenário in golang e passar pra cá.