const fs = require("fs")

function getTodosCarros(){
return JSON.parse(fs.readFileSync("carros.json"))
}

function getCarroPorId(id){
    const carros = JSON.parse(fs.readFileSync("carros.json"))
    const carroFiltrado = carros.filter(carro => carro.id === id)[0]
    return carroFiltrado
}
function addCarro (carroNovo){
    const carros = JSON.parse(fs.readFileSync("carros.json"))
    const novaListaCarros = [...carros, carroNovo]
    fs.writeFileSync("carros.json", JSON.stringify(novaListaCarros))
}
function editaCarro(edicao, id){
    let carrosAtuais = JSON.parse(fs.readFileSync("carros.json"))
    const indiceEditado = carrosAtuais.findIndex(carro => carro.id === id)
    const conteudoEditado = {...carrosAtuais[indiceEditado], ...edicao}

    carrosAtuais[indiceEditado] = conteudoEditado
    fs.writeFileSync("carros.json", JSON.stringify(carrosAtuais))
}
function deletaCarroId(id){
    const carros = JSON.parse(fs.readFileSync("carros.json"))
    const carroFiltrado = carros.filter(carro => carro.id !== id)
    fs.writeFileSync("carros.json", JSON.stringify(carroFiltrado))
}


module.exports = {
    getTodosCarros,
    getCarroPorId,
    addCarro,
    editaCarro,
    deletaCarroId

    
}