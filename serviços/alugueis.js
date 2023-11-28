const fs = require("fs")

function getTodosAlugueis(){
return JSON.parse(fs.readFileSync("alugueis.json"))
}

function getAluguelPorId(id){
    const alugueis = JSON.parse(fs.readFileSync("alugueis.json"))
    const aluguelFiltrado = alugueis.filter(aluguel => aluguel.id === id)[0]
    return aluguelFiltrado
}
function addAluguel (aluguelNovo){
    const alugueis = JSON.parse(fs.readFileSync("alugueis.json"))
    const novaListaAlugueis = [...alugueis, aluguelNovo]
    fs.writeFileSync("alugueis.json", JSON.stringify(novaListaAlugueis))
}
function editaAluguel(edicao, id){
    let alugueisAtuais = JSON.parse(fs.readFileSync("alugueis.json"))
    const indiceEditado =  alugueisAtuais.findIndex(aluguel => aluguel.id === id)
    const conteudoEditado = {...alugueisAtuais[indiceEditado], ...edicao}

    alugueisAtuais[indiceEditado] = conteudoEditado
    fs.writeFileSync("alugueis.json", JSON.stringify(alugueisAtuais))
}
function deletaAluguelId(id){
    const alugueis = JSON.parse(fs.readFileSync("alugueis.json"))
    const aluguelFiltrado = alugueis.filter(aluguel => aluguel.id !== id)
    fs.writeFileSync("alugueis.json", JSON.stringify(aluguelFiltrado))
}


module.exports = {
    getTodosAlugueis,
    getAluguelPorId,
    addAluguel,
    editaAluguel,
    deletaAluguelId

    
}