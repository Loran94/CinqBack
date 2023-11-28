const fs = require("fs")

function getTodosClientes(){
return JSON.parse(fs.readFileSync("clientes.json"))
}

function getClientePorId(id){
    const clientes = JSON.parse(fs.readFileSync("clientes"))
    const clienteFiltrado = clientes.filter(cliente => cliente.id === id)[0]
    return clienteFiltrado
}
function addCliente (clienteNovo){
    const carros = JSON.parse(fs.readFileSync("clientes.json"))
    const novaListaClientes = [...clientes, clienteNovo]
    fs.writeFileSync("clientes.json", JSON.stringify(novaListaClientes))
}
function editaCliente(edicao, id){
    let clientesAtuais = JSON.parse(fs.readFileSync("clientes.json"))
    const indiceEditado = clientesAtuais.findIndex(cliente => cliente.id === id)
    const conteudoEditado = {...clientesAtuais[indiceEditado], ...edicao}

    clientesAtuais[indiceEditado] = conteudoEditado
    fs.writeFileSync("clientes.json", JSON.stringify(clientesAtuais))
}
function deletaClienteId(id){
    const clientes = JSON.parse(fs.readFileSync("clientes.json"))
    const clienteFiltrado = clientes.filter(cliente => cliente.id !== id)
    fs.writeFileSync("clientes.json", JSON.stringify(clienteFiltrado))
}


module.exports = {
   getTodosClientes,
    getClientePorId,
    addCliente,
    editaCliente,
    deletaClienteId

    
}