
module.exports.vagoes_lifo = function vagoes_lifo(valores_entrada){
var valores_saida = []

for (index = valores_entrada.length - 1; index >= 0; index--) {
    valores_saida.push(valores_entrada[index])
}

return valores_saida
}

module.exports.vagoes_fifo = function vagoes_fifo(valores_entrada){
var valores_saida = []

for (index = 0; index < valores_entrada.length; index++) {
    valores_saida.push(valores_entrada[index])
}

return valores_saida
}


// module.exports =  {vagoes_lifo, vagoes_fifo}

//https://medium.com/trainingcenter/entendendo-m%C3%B3dulos-no-javascript-73bce1d64dbf